from fastapi import APIRouter, Depends, status, HTTPException, Response
from pydantic import EmailStr

from auth.dependencies import ValidToken
from auth.exceptions import invalid_credentials_exception
from auth.service import get_current_user
from auth.service import perform_user_logout, get_user_by_email as auth_get_user_by_email
from core.dependencies import DBDependency
from users import service
from users.models import User
from users.schemas import UserUpdateSchema, UserReadSchema

router = APIRouter()


@router.get("/user/email", response_model=UserReadSchema,
            description="Get user by email")
def get_user_by_email(user_email: EmailStr, db=DBDependency):
    db_user = auth_get_user_by_email(db=db, email=user_email)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return db_user


@router.put('/user/email', dependencies=[ValidToken],
            description="Update user email", response_model=UserReadSchema,
            status_code=status.HTTP_200_OK)
def update_user_email(user_email: EmailStr, db=DBDependency,
                      user: User = Depends(get_current_user)):
    if user_email == user.email:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="New email address cannot be same as old")
    if auth_get_user_by_email(db, user_email):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="User with specified email already exist")
    return service.update_user_email(user_email, db, user)


@router.put('/user/{user_id}', dependencies=[ValidToken], description="Update user profile",
            response_model=UserReadSchema)
def update_user_profile(user_id: int, data: UserUpdateSchema, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    return service.update_user_profile(data, db, user)


@router.delete('/user/{user_id}', dependencies=[ValidToken], description="Delete user profile",
               status_code=status.HTTP_204_NO_CONTENT)
def delete_user_profile(user_id: int, response: Response, db=DBDependency, user: User = Depends(get_current_user)):
    if not user or user_id != user.user_id:
        raise invalid_credentials_exception()
    perform_user_logout(response)
    return service.delete_user_profile(db, user_id)
