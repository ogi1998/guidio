from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base

from src.core.config import settings

engine = create_engine(str(settings.SQLALCHEMY_DATABASE_URI))

Base = declarative_base()
