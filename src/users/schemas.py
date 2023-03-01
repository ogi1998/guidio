from pydantic import EmailStr

from core.schemas import BaseModelSchema, UserPasswordSchema


class UserIDSchema(BaseModelSchema):
    user_id: int


class UserBaseSchema(BaseModelSchema):
    email: EmailStr
    first_name: str
    last_name: str


class UserUpdateSchema(BaseModelSchema):
    first_name: str
    last_name: str

    class Config:
        schema_extra = {
            "example": {
                "first_name": "John",
                "last_name": "Brown",
            }
        }


class UserReadSchema(UserBaseSchema):
    user_id: int
    is_active: bool

    class Config:
        orm_mode = True


class UserPasswordUpdateSchema(UserPasswordSchema):
    current_password: str

    class Config:
        schema_extra = {
            "example": {
                "current_password": "MyPa$$123!",
                "password": "MyPa$$123!",
            }
        }
