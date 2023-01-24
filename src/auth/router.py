from fastapi import APIRouter, HTTPException, status, Response
from sqlalchemy import exc

from auth import schemas, service, exceptions
from auth.dependencies import ValidToken
from core.dependencies import DBDependency
from core.settings import AUTH_TOKEN
from users.schemas import UserReadSchema as UserReadSchema

router = APIRouter()


@router.post("/register", status_code=status.HTTP_201_CREATED, response_model=UserReadSchema)
def register_user(data: schemas.RegistrationSchema, db=DBDependency) -> UserReadSchema:
    try:
        user = service.create_user(db, data)
        return user
    except exc.IntegrityError as e:
        error_info = e.orig.args
        if service.find_detail_in_error("email", error_info):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                detail="User with specified email already exists")


@router.post("/login")
def login_user(data: schemas.LoginSchema, response: Response, db=DBDependency):
    user = service.authenticate_user(data.email, data.password, db)
    if not user:
        raise exceptions.invalid_credentials_exception()
    token = service.create_auth_token(user.user_id)
    response.set_cookie(key=AUTH_TOKEN, value=token)
    return {"user_id": user.user_id, AUTH_TOKEN: token}


@router.post('/logout', dependencies=[ValidToken])
def logout_user(response: Response):
    response.delete_cookie(key=AUTH_TOKEN)
    response.status_code = status.HTTP_200_OK
    return response
