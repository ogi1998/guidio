from fastapi import APIRouter, HTTPException, status, Response
from sqlalchemy import exc

from auth import schemas, service, exceptions
from auth.dependencies import ValidToken
from core.dependencies import DBDependency
from core.settings import AUTH_TOKEN
from users.schemas import UserIDSchema

router = APIRouter()


@router.post(path="/register",
             status_code=status.HTTP_201_CREATED,
             response_model=UserIDSchema)
def register_user(data: schemas.RegistrationSchema, db=DBDependency) -> UserIDSchema:
    try:
        user_id: int = service.create_user(db, data)
        return UserIDSchema(user_id=user_id)
    except exc.IntegrityError as e:
        error_info = e.orig.args
        if service.find_detail_in_error("email", error_info):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                detail="User with specified email already exists")


@router.post(path="/login",
             response_model=UserIDSchema)
def login_user(data: schemas.LoginSchema, response: Response, db=DBDependency) -> UserIDSchema:
    user = service.authenticate_user(data.email, data.password, db)
    if not user:
        raise exceptions.invalid_credentials_exception()
    token = service.create_auth_token(user.user_id)
    response.set_cookie(key=AUTH_TOKEN, value=token)
    return UserIDSchema(user_id=user.user_id)


@router.post(path='/logout',
             dependencies=[ValidToken])
def logout_user(response: Response):
    return service.perform_user_logout(response)
