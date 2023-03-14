from fastapi import APIRouter, HTTPException, status, Response, Depends
from sqlalchemy import exc
from starlette.responses import JSONResponse

from auth import schemas, service, exceptions
from auth.dependencies import ValidToken
from auth.service import get_current_user
from core.dependencies import DBDependency
from core.models import User
from core.settings import AUTH_TOKEN
from users.schemas import UserIDSchema, UserReadSchema

router = APIRouter()


@router.post(path="/register",
             status_code=status.HTTP_201_CREATED,
             response_model=UserIDSchema)
def register_user(data: schemas.RegistrationSchemaUser, db=DBDependency) -> UserIDSchema:
    try:
        user_id: int = service.create_user(db, data)
        return UserIDSchema(user_id=user_id)
    except exc.IntegrityError as e:
        error_info = e.orig.args
        if service.find_detail_in_error("email", error_info):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                detail="User with specified email already exists")


@router.post(path="/login",
             response_model=UserReadSchema)
def login_user(data: schemas.LoginSchema, response: Response, db=DBDependency) -> UserReadSchema:
    user = service.authenticate_user(data.email, data.password, db)
    if not user:
        raise exceptions.invalid_credentials_exception()
    token = service.create_auth_token(user.user_id)
    response.set_cookie(key=AUTH_TOKEN, value=token)
    return UserReadSchema(user_id=user.user_id,
                          is_active=user.is_active,
                          email=user.email,
                          first_name=user.first_name,
                          last_name=user.last_name)


@router.post(path='/logout',
             dependencies=[ValidToken])
def logout_user():
    response = JSONResponse(content={"message": "User logged out successfully"})
    response.delete_cookie(AUTH_TOKEN)
    response.status_code = status.HTTP_200_OK
    return response


@router.get(path="/token",
            dependencies=[ValidToken],
            description="Get user object from token",
            response_model=UserReadSchema)
def get_user_from_token(user: User = Depends(get_current_user)) -> UserReadSchema:
    return UserReadSchema(user_id=user.user_id,
                          is_active=user.is_active,
                          email=user.email,
                          first_name=user.first_name,
                          last_name=user.last_name)
