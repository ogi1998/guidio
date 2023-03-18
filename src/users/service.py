from sqlalchemy.orm import Session, joinedload

from auth.service import get_password_hash
from core.models import User, UserDetail, Profession
from users.schemas import UserProfileUpdateSchema, UserPasswordUpdateSchema


def get_instructors(db: Session) -> list[User]:
    instructors = db.query(User).options(joinedload(User.user_details))\
        .filter(UserDetail.is_instructor.is_(True)).all()
    return instructors


def get_profession_by_id(db: Session, profession_id: int) -> Profession | None:
    profession = db.query(Profession).get(profession_id)
    return profession


def get_professions_by_name(db: Session, name: str) -> list[Profession]:
    professions = db.query(Profession).filter(Profession.name.ilike(f'%{name}%')).all()
    return professions


def get_user_profile_by_id(user_id: int, db: Session) -> User | None:
    user = db.query(User).get(user_id)
    return user


def update_user_profile(data: UserProfileUpdateSchema,
                        db: Session, db_user: User) -> User:
    db_user.email = data.email
    db_user.first_name = data.first_name
    db_user.last_name = data.last_name
    user_detail: UserDetail = db.query(UserDetail) \
        .filter(UserDetail.user_id == db_user.user_id).first()
    if user_detail:
        user_detail.linkedin = data.details.linkedin
        user_detail.github = data.details.github
        user_detail.website = data.details.website
        user_detail.is_instructor = data.details.is_instructor
        user_detail.bio = data.details.bio
        user_detail.profession_id = data.details.profession_id
    else:
        new_user_detail = UserDetail(user_id=db_user.user_id,
                                     linkedin=data.details.linkedin,
                                     github=data.details.github,
                                     website=data.details.website,
                                     is_instructor=data.details.is_instructor,
                                     bio=data.details.bio,
                                     profession_id=data.details.profession_id)
        db.add(new_user_detail)
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user_profile(db: Session, user_id: int) -> None:
    user: User = db.query(User).get(user_id)
    db.delete(user)
    db.commit()
    return None


def update_user_password(db: Session,
                         data: UserPasswordUpdateSchema,
                         user: User) -> tuple[User, UserDetail]:
    hashed_password = get_password_hash(data.password)
    user.password = hashed_password
    db.commit()
    db.refresh(user)
    user_details = db.query(UserDetail).filter(UserDetail.user_id == user.user_id).first()
    return user, user_details
