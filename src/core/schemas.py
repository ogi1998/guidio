import re

from humps.camel import case
from pydantic import BaseModel as PydanticBaseModel, Field, validator


class BaseModelSchema(PydanticBaseModel):

    class Config:
        alias_generator = case
        allow_population_by_field_name = True


class UserPasswordSchema(BaseModelSchema):
    password: str = Field(min_length=8)

    @validator('password')
    def check_password(cls, password: str):
        if re.search('[0-9]', password) is None:
            raise ValueError("Make sure password contains a number")
        elif re.search('[A-Z]', password) is None:
            raise ValueError("Make sure password contains a capital letter")
        elif re.search('[@$!%*?&]', password) is None:
            raise ValueError("Password must contain at least one of these special characters: @$!%*?&")
        return password
