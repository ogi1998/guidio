from fastapi import APIRouter, Depends, status, HTTPException, Response

from auth.dependencies import ValidToken
from auth.exceptions import invalid_credentials_exception
from auth.service import get_current_user, verify_password
from auth.service import perform_user_logout
from core.dependencies import DBDependency
from core.models import User
from users import service
from users.schemas import UserUpdateSchema, UserReadSchema, UserPasswordUpdateSchema

router = APIRouter()


@router.get(path="/{user_id}",
            description="Get user profile by id",
            response_model=UserReadSchema)
def get_user_profile_by_id(user_id: int, db=DBDependency):
    user = service.get_user_profile_by_id(user_id, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user


@router.put(path='/{user_id}',
            dependencies=[ValidToken],
            description="Update user profile",
            response_model=UserReadSchema)
def update_user_profile(user_id: int, data: UserUpdateSchema, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    return service.update_user_profile(data, db, user)


@router.delete(path='/{user_id}',
               dependencies=[ValidToken],
               description="Delete user profile",
               status_code=status.HTTP_204_NO_CONTENT)
def delete_user_profile(user_id: int, response: Response, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if not user or user_id != user.user_id:
        raise invalid_credentials_exception()
    perform_user_logout(response)
    return service.delete_user_profile(db, user_id)


@router.put(path="/{user_id}/update_password",
            dependencies=[ValidToken],
            description="Update user password",
            status_code=status.HTTP_200_OK,
            response_model=UserReadSchema)
def update_user_password(user_id: int,
                         data: UserPasswordUpdateSchema,
                         db=DBDependency,
                         user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    if not verify_password(data.current_password, user.password):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="Invalid password")
    return service.update_user_password(db, data, user)

