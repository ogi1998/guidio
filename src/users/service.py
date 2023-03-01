from sqlalchemy.orm import Session

from auth.service import get_password_hash
from core.models import User
from users.schemas import UserUpdateSchema, UserPasswordUpdateSchema, UserReadSchema


def get_user_profile_by_id(user_id: int, db: Session) -> User | None:
    user = db.query(User).get(user_id)
    return user


def update_user_profile(data: UserUpdateSchema, db: Session, user: User) -> User:
    user.first_name = data.first_name
    user.last_name = data.last_name
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def delete_user_profile(db: Session, user_id: int) -> None:
    user: User = db.query(User).get(user_id)
    db.delete(user)
    db.commit()
    return None


def update_user_password(db: Session,
                         data: UserPasswordUpdateSchema,
                         user: User) -> UserReadSchema:
    hashed_password = get_password_hash(data.password)
    user.password = hashed_password
    db.commit()
    db.refresh(user)
    return user
