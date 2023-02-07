from fastapi import APIRouter, Depends, status, HTTPException

from auth.dependencies import ValidToken
from auth.exceptions import invalid_credentials_exception
from auth.service import get_current_user
from core.dependencies import DBDependency
from core.models import User
from guides import schemas
from guides import service

router = APIRouter()


@router.get("/",
            description="Get list of guides",
            status_code=status.HTTP_200_OK,
            response_model=list[schemas.GuideListReadSchema])
def get_list_of_guides(db=DBDependency):
    guides = service.get_list_of_guides(db)
    if not guides:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Guides not found")
    return guides


@router.get("/{guide_id}",
            dependencies=[ValidToken],
            description="Get single guide by ID",
            status_code=status.HTTP_200_OK,
            response_model=schemas.GuideReadSchema)
def get_guide_by_id(guide_id: int, db=DBDependency):
    guide = service.get_guide_by_id(db, guide_id)
    if not guide:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Guide not found")
    return guide


@router.post("/", dependencies=[ValidToken],
             description="Create guide",
             status_code=status.HTTP_201_CREATED,
             response_model=schemas.GuideReadSchema)
def create_guide(data: schemas.GuideCreateUpdateSchema,
                 db=DBDependency,
                 user: User = Depends(get_current_user)):
    if not user:
        raise invalid_credentials_exception()
    return service.save_guide(db, data, user_id=user.user_id)
