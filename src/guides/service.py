from sqlalchemy import asc, desc
from sqlalchemy.orm import Session

from core.models import Guide, User
from guides.schemas import GuideCreateUpdateSchema


def count_pages(db: Session, page_size: int):
    count_of_guides: int = db.query(Guide.guide_id).order_by(desc(Guide.last_modified)).count()
    division: tuple[int, int] = divmod(count_of_guides, page_size)
    pages: int = division[0] + 1 if division[1] else division[0]
    return pages


def get_list_of_guides(db: Session, page: int, page_size: int) -> list[Guide] | None:
    offset: int = page * page_size
    guides: list[Guide] = db.query(Guide)\
        .filter(Guide.published)\
        .order_by(desc(Guide.last_modified)) \
        .offset(offset).limit(page_size).all()
    return guides


def get_list_of_guides_ascending(db: Session, page: int, page_size: int) -> list[Guide] | None:
    offset: int = page * page_size
    guides = db.query(Guide)\
        .filter(Guide.published)\
        .order_by(asc(Guide.last_modified))\
        .offset(offset).limit(page_size).all()
    return guides


def search_guides(db: Session, title: str, page: int, page_size: int) -> list[Guide] | None:
    offset: int = page * page_size
    guides = db.query(Guide).filter(Guide.title.ilike(f"%{title}%")) \
        .filter(Guide.published)\
        .order_by(desc(Guide.last_modified)).offset(offset).limit(page_size).all()
    return guides


def get_guides_by_user_id(db: Session,
                          user_id: int,
                          page: int,
                          page_size: int,
                          user: User) -> list[Guide] | None:
    offset = page * page_size
    if user.user_id == user_id:
        guides = db.query(Guide) \
            .filter(Guide.user_id == user_id) \
            .order_by(desc(Guide.last_modified)).offset(offset).limit(page_size).all()
    else:
        guides = db.query(Guide) \
            .filter(Guide.user_id == user_id) \
            .filter(Guide.published) \
            .order_by(desc(Guide.last_modified)).offset(offset).limit(page_size).all()
    return guides


def get_guide_by_id(db: Session, guide_id: int, user: User) -> Guide | None:
    guide: Guide = db.query(Guide).get(guide_id)
    if not guide:
        return None
    if not guide.user_id == user.user_id and not guide.published:
        return None
    return guide


def save_guide(db: Session,
               data: GuideCreateUpdateSchema,
               user_id: int,
               guide=None) -> Guide:
    if not guide:
        guide = Guide()
    guide.title = data.title
    guide.content = data.content
    guide.note = data.note
    guide.published = data.published
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
