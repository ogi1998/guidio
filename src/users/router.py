from fastapi import APIRouter, Depends, status, HTTPException

from auth.dependencies import ValidToken
from auth.exceptions import invalid_credentials_exception
from auth.service import get_current_user
from core.dependencies import DBDependency
from users import service
from users.models import User
from auth.service import get_user_by_email
from users.schemas import UserUpdateSchema, UserReadSchema

router = APIRouter()


@router.get("/users/{user_email}", response_model=UserReadSchema)
def get_user(user_email: str, db=DBDependency):
    db_user = get_user_by_email(db=db, email=user_email)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return db_user


# TODO: Add change email endpoint

# TODO: Add change password endpoint

@router.put('/user/{user_id}', dependencies=[ValidToken], description="Update user profile",
            response_model=UserReadSchema)
def update_user_profile(user_id: int, data: UserUpdateSchema, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    return service.update_user_profile(data, db, user)


@router.delete('/user/{user_id}', dependencies=[ValidToken], description="Delete user profile",
               status_code=status.HTTP_204_NO_CONTENT)
def delete_user_profile(user_id: int, db=DBDependency, user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    return service.delete_user_profile(db, user_id)
