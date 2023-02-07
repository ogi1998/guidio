from fastapi import APIRouter, Depends, status, HTTPException, Response
from pydantic import EmailStr

from auth.dependencies import ValidToken
from auth.exceptions import invalid_credentials_exception
from auth.service import get_current_user
from auth.service import perform_user_logout
from core.dependencies import DBDependency
from users import service
from users.models import User
from users.schemas import UserUpdateSchema, UserReadSchema

router = APIRouter()


@router.get("/user/{user_id}", description="Get user profile by id", response_model=UserReadSchema)
def get_user_profile_by_id(user_id: int, db=DBDependency):
    user = service.get_user_profile_by_id(user_id, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user


@router.put('/user/{user_id}', dependencies=[ValidToken], description="Update user profile",
            response_model=UserReadSchema)
def update_user_profile(user_id: int, data: UserUpdateSchema, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    return service.update_user_profile(data, db, user)


@router.delete('/user/{user_id}', dependencies=[ValidToken], description="Delete user profile",
               status_code=status.HTTP_204_NO_CONTENT)
def delete_user_profile(user_id: int, response: Response, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if not user or user_id != user.user_id:
        raise invalid_credentials_exception()
    perform_user_logout(response)
    return service.delete_user_profile(db, user_id)
