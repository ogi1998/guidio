from fastapi import APIRouter, Depends, status, HTTPException, Response

from auth.dependencies import ValidToken
from auth.exceptions import invalid_credentials_exception
from auth.service import get_current_user, verify_password
from core.dependencies import DBDependency
from core.models import User
from core.settings import AUTH_TOKEN
from users import service
from users.schemas import UserProfileUpdateSchema, UserReadSchema, UserPasswordUpdateSchema

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
def update_user_profile(user_id: int, data: UserProfileUpdateSchema, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    updated_user, updated_details, profession = service.update_user_profile(data, db, user)
    return UserReadSchema(email=updated_user.email,
                          first_name=updated_user.first_name,
                          last_name=updated_user.last_name,
                          user_id=updated_user.user_id,
                          is_active=updated_user.is_active,
                          bio=updated_details.bio,
                          profession=profession)


@router.delete(path='/{user_id}',
               dependencies=[ValidToken],
               description="Delete user profile",
               status_code=status.HTTP_204_NO_CONTENT)
def delete_user_profile(user_id: int, response: Response, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if not user or user_id != user.user_id:
        raise invalid_credentials_exception()
    response.delete_cookie(AUTH_TOKEN)
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

