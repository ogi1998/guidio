from sqlalchemy import Column, Integer, String, Boolean, DateTime, func, Text, ForeignKey
from sqlalchemy.orm import relationship

from src.database import Base


class User(Base):
    __tablename__ = "user"

    user_id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    guides = relationship("Guide", back_populates="user")

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Guide(Base):
    __tablename__ = "guide"

    guide_id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    content = Column(Text)
    last_modified = Column(DateTime(timezone=True), server_default=func.now(),
                           onupdate=func.current_timestamp())

    user_id = Column(Integer, ForeignKey("user.user_id", ondelete="CASCADE"))

    user = relationship("User", back_populates="guides")

    def __str__(self):
        return self.title