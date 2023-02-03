from pydantic import EmailStr
from sqlalchemy.orm import Session

from users.models import User
from users.schemas import UserUpdateSchema


def update_user_profile(data: UserUpdateSchema, db: Session, user: User) -> User:
    user.first_name = data.first_name
    user.last_name = data.last_name
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def update_user_email(user_email: EmailStr, db: Session, user: User) -> User:
    user.email = user_email
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def delete_user_profile(db: Session, user_id: int) -> None:
    user: User = db.query(User).get(user_id)
    db.delete(user)
    db.commit()
    return None
