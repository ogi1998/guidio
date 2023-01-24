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
