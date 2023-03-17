from sqlalchemy import asc, desc
from sqlalchemy.orm import Session

from core.models import Guide
from guides.schemas import GuideCreateUpdateSchema


def count_pages(db: Session, page_size: int):
    count_of_guides: int = db.query(Guide.guide_id).order_by(desc(Guide.last_modified)).count()
    division: tuple[int, int] = divmod(count_of_guides, page_size)
    pages: int = division[0] + 1 if division[1] else division[0]
    return pages


def get_list_of_guides(db: Session, page: int, page_size: int) -> list[Guide] | None:
    guides = db.query(Guide).order_by(desc(Guide.last_modified)).offset(page).limit(page_size).all()
    return guides


def get_list_of_guides_ascending(db: Session, page: int, page_size: int) -> list[Guide] | None:
    guides = db.query(Guide).order_by(asc(Guide.last_modified)).offset(page).limit(page_size).all()
    return guides


def search_guides(db: Session, title: str, page: int, page_size: int) -> list[Guide] | None:
    guides = db.query(Guide).filter(Guide.title.ilike(f"%{title}%")) \
        .order_by(desc(Guide.last_modified)).offset(page).limit(page_size).all()
    return guides


def get_guide_by_id(db: Session, guide_id: int) -> Guide | None:
    guide = db.query(Guide).get(guide_id)
    return guide


def save_guide(db: Session,
               data: GuideCreateUpdateSchema,
               user_id: int,
               guide=None) -> Guide:
    if not guide:
        guide = Guide()
    guide.title = data.title
    guide.content = data.content
    guide.user_id = user_id
    db.add(guide)
    db.commit()
    db.refresh(guide)
    return guide


def delete_guide(db: Session, guide_id: int) -> None:
    guide = db.query(Guide).get(guide_id)
    db.delete(guide)
    db.commit()
    return None
