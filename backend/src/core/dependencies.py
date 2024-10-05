from collections.abc import Generator

from fastapi import Depends
from sqlalchemy.orm import Session

from database import engine


def get_db() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session


SessionDep: Session = Depends(get_db)
