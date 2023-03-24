from fastapi import APIRouter, Depends, status, HTTPException, Response, UploadFile

from auth.dependencies import ValidToken
from auth.exceptions import invalid_credentials_exception
from auth.service import get_current_user, verify_password
from core.dependencies import DBDependency
from core.models import User
from core.settings import AUTH_TOKEN
from users import service, schemas

router = APIRouter()


@router.get(path="/professions",
            dependencies=[ValidToken],
            description="Get professions based on search by name",
            response_model=list[schemas.ProfessionReadSchema])
def get_profession_by_name(name: str,
                           db=DBDependency):
    professions = service.get_professions_by_name(db, name)
    return professions


@router.get(path="/instructors",
            dependencies=[ValidToken],
            description="Get list of users who are instructors",
            response_model=list[schemas.UserReadSchema])
def get_instructors(db=DBDependency) -> list[schemas.UserReadSchema]:
    instructors = service.get_instructors(db)
    return instructors


@router.get(path="/avatar",
            dependencies=[ValidToken],
            description="Get user avatar",
            response_model=schemas.UserAvatarSchema,
            status_code=status.HTTP_200_OK)
def get_avatar(user: User = Depends(get_current_user)):
    avatar = service.get_avatar(user)
    if avatar is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Avatar not found")
    return schemas.UserAvatarSchema(avatar=avatar)


@router.post(path="/avatar",
             dependencies=[ValidToken],
             description="Create user avatar",
             response_model=schemas.UserReadSchema,
             status_code=status.HTTP_201_CREATED)
def create_avatar(file: UploadFile, db=DBDependency, user: User = Depends(get_current_user)):
    saved = service.save_avatar(file, db, user)
    return saved


@router.put(path="/avatar",
            dependencies=[ValidToken],
            description="Update user avatar",
            response_model=schemas.UserReadSchema,
            status_code=status.HTTP_200_OK)
def update_avatar(file: UploadFile, db=DBDependency, user: User = Depends(get_current_user)):
    updated = service.save_avatar(file, db, user)
    return updated


@router.delete(path="/avatar",
               dependencies=[ValidToken],
               description="Delete user avatar",
               status_code=status.HTTP_204_NO_CONTENT)
def delete_avatar(db=DBDependency, user: User = Depends(get_current_user)):
    avatar = user.user_details.avatar
    if avatar is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Avatar not found")
    service.delete_avatar(db, user)
    return None


@router.get(path="/cover_image",
            dependencies=[ValidToken],
            description="Get user cover image",
            response_model=schemas.UserCoverImageSchema,
            status_code=status.HTTP_200_OK)
def get_cover_image(user: User = Depends(get_current_user)):
    image = service.get_cover_image(user)
    if image is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Cover image not found")
    return schemas.UserCoverImageSchema(cover_image=image)


@router.post(path="/cover_image",
             dependencies=[ValidToken],
             description="Create user cover image",
             response_model=schemas.UserReadSchema,
             status_code=status.HTTP_201_CREATED)
def create_cover_image(file: UploadFile, db=DBDependency, user: User = Depends(get_current_user)):
    saved = service.save_cover_image(file, db, user)
    return saved


@router.put(path="/cover_image",
            dependencies=[ValidToken],
            description="Update user cover image",
            response_model=schemas.UserReadSchema,
            status_code=status.HTTP_200_OK)
def update_cover_image(file: UploadFile, db=DBDependency, user: User = Depends(get_current_user)):
    updated = service.save_cover_image(file, db, user)
    return updated


@router.delete(path="/cover_image",
               dependencies=[ValidToken],
               description="Delete user cover image",
               status_code=status.HTTP_204_NO_CONTENT)
def delete_cover_image(db=DBDependency, user: User = Depends(get_current_user)):
    image = user.user_details.cover_image
    if image is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Cover image not found")
    service.delete_cover_image(db, user)
    return None


@router.get(path="/{user_id}",
            description="Get user profile by id",
            response_model=schemas.UserReadSchema)
def get_user_profile_by_id(user_id: int, db=DBDependency):
    user = service.get_user_profile_by_id(user_id, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user


@router.put(path='/{user_id}',
            dependencies=[ValidToken],
            description="Update user profile",
            response_model=schemas.UserReadSchema)
def update_user_profile(user_id: int, data: schemas.UserProfileUpdateSchema, db=DBDependency,
                        user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    if data.details.profession_id:
        profession = service.get_profession_by_id(db, data.details.profession_id)
        if not profession:
            raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                                detail="Profession doesn't exist")
    service.update_user_profile(data, db, user)
    return user


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
            response_model=schemas.UserReadSchema)
def update_user_password(user_id: int,
                         data: schemas.UserPasswordUpdateSchema,
                         db=DBDependency,
                         user: User = Depends(get_current_user)):
    if user_id != user.user_id:
        raise invalid_credentials_exception()
    if not verify_password(data.current_password, user.password):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="Invalid password")
    updated_user, updated_details = service.update_user_password(db, data, user)
    return schemas.UserReadSchema(email=updated_user.email,
                                  first_name=updated_user.first_name,
                                  last_name=updated_user.last_name,
                                  user_id=updated_user.user_id,
                                  is_active=updated_user.is_active,
                                  user_details=updated_details)
