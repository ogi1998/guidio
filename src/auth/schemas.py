from pydantic import EmailStr

from core.schemas import PasswordCheckerSchema, BaseModelSchema
from users import schemas


class RegistrationSchema(schemas.UserBaseSchema, PasswordCheckerSchema):
    pass

    class Config:
        schema_extra = {
            "example": {
                "email": "john@guidio.com",
                "first_name": "John",
                "last_name": "Brown",
                "password": "examplePassword123!",
            }
        }


class LoginSchema(BaseModelSchema):
    email: EmailStr
    password: str

    class Config:
        schema_extra = {
            "example": {
                "email": "john@guidio.com",
                "password": "examplePassword123!",
            }
        }
