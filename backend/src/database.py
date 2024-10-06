from sqlalchemy import create_engine
from sqlalchemy.future import select
from sqlalchemy.orm import Session

from core.models import User
from src.core.config import settings
from utils.auth import get_password_hash

engine = create_engine(str(settings.SQLALCHEMY_DATABASE_URI))


async def init_db(session: Session) -> None:
    # First run Alembic migrations with `alembic upgrade head` to create tables

    # Create first superuser
    user = session.execute(
        select(User).where(User.email == settings.FIRST_SUPERUSER_EMAIL)
    ).first()
    if not user:
        # TODO: Refactor this because there is already save_user function in auth.service
        # Problem is when calling this save_user function there is circular import because of SessionDep
        new_user = User()
        new_user.email = settings.FIRST_SUPERUSER_EMAIL
        new_user.first_name = "Admin"
        new_user.last_name = "Admin"
        new_user.password = await get_password_hash(settings.FIRST_SUPERUSER_PASSWORD)
        new_user.is_active = True
        session.add(new_user)
        session.commit()
