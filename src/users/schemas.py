from pydantic import EmailStr

from core.schemas import BaseModelSchema, UserPasswordSchema


class ProfessionReadSchema(BaseModelSchema):
    profession_id: int
    name: str

    class Config:
        orm_mode = True


class UserIDSchema(BaseModelSchema):
    user_id: int


class UserBaseSchema(BaseModelSchema):
    email: EmailStr
    first_name: str
    last_name: str


class UserProfileUpdateSchema(BaseModelSchema):
    first_name: str
    last_name: str
    bio: str | None
    profession_id: int | None

    class Config:
        schema_extra = {
            "example": {
                "first_name": "John",
                "last_name": "Brown",
                "bio": "This is an example of bio",
                "profession_id": 1
            }
        }


class UserReadSchema(UserBaseSchema):
    user_id: int
    is_active: bool
    bio: str | None
    profession: ProfessionReadSchema | None

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
