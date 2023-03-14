from sqlalchemy import Column, Integer, String, Boolean, DateTime, func, Text, ForeignKey
from sqlalchemy.orm import relationship

from src.database import Base


# CODEBOOKS
class Profession(Base):
    __tablename__ = "profession"

    id = Column(Integer, primary_key=True)
    name = Column(String(100), unique=True, nullable=False)


# USERS
class User(Base):
    __tablename__ = "user"

    user_id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100))
    last_name = Column(String(150))
    email = Column(String(120), unique=True, index=True, nullable=False)
    password = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user_details = relationship("UserDetail", back_populates="user")
    guides = relationship("Guide", back_populates="user")

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class UserDetail(Base):
    __tablename__ = "user_detail"

    id = Column(Integer, primary_key=True)
    profession_id = Column(Integer, ForeignKey('profession.id'))
    bio = Column(String(255))

    user_id = Column(Integer, ForeignKey('user.user_id'))
    user = relationship("User", back_populates="user_details")


# GUIDES
class Guide(Base):
    __tablename__ = "guide"

    guide_id = Column(Integer, primary_key=True, index=True)
    title = Column(String(70))
    content = Column(Text)
    last_modified = Column(DateTime(timezone=True), server_default=func.now(),
                           onupdate=func.current_timestamp())

    user_id = Column(Integer, ForeignKey("user.user_id", ondelete="CASCADE"))

    user = relationship("User", back_populates="guides")

    def __str__(self):
        return self.title
