from pydantic import EmailStr

from core.schemas import BaseModelSchema, UserPasswordSchema


class ProfessionReadSchema(BaseModelSchema):
    profession_id: int
    name: str

    class Config:
        orm_mode = True


class UserDetailSchema(BaseModelSchema):
    linkedin: str | None
    github: str | None
    website: str | None
    is_instructor: bool
    bio: str | None
    profession: ProfessionReadSchema | None

    class Config:
        orm_mode = True


class UserIDSchema(BaseModelSchema):
    user_id: int


class UserBaseSchema(BaseModelSchema):
    email: EmailStr
    first_name: str
    last_name: str


class UserDetailUpdateSchema(BaseModelSchema):
    linkedin: str | None
    github: str | None
    website: str | None
    is_instructor: bool = False
    bio: str | None
    profession_id: int | None

    class Config:
        schema_extra = {
            "example": {
                "linkedin": "linkedin.com",
                "github": "github.com",
                "website": "google.com",
                "is_instructor": False,
                "bio": "This is an example of bio",
                "profession_id": 1
            }
        }


class UserProfileUpdateSchema(BaseModelSchema):
    email: EmailStr
    first_name: str
    last_name: str
    details: UserDetailUpdateSchema

    class Config:
        schema_extra = {
            "example": {
                "email": "john@guidio.com",
                "first_name": "John",
                "last_name": "Brown",
                "details": UserDetailUpdateSchema.Config.schema_extra['example']
            }
        }


class UserReadSchema(UserBaseSchema):
    user_id: int
    is_active: bool
    user_details: UserDetailSchema | None

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
