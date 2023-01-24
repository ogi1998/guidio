from fastapi import APIRouter, Depends

from auth.dependencies import ValidToken
from auth.exceptions import invalid_credentials_exception
from auth.service import get_current_user
from core.dependencies import DBDependency
from users import service
from users.models import User
from users.schemas import UserUpdateSchema, UserReadSchema

router = APIRouter()


# TODO: Add change email endpoint

# TODO: Add change password endpoint

@router.put('/user/{user_id}', dependencies=[ValidToken], description="Update user profile", response_model=UserReadSchema)
def update_user_profile(user_id: int, data: UserUpdateSchema, db=DBDependency, user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    return service.update_user_profile(data, db, user)

# TODO: Add endpoint for deleting user profile
