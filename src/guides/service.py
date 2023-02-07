from sqlalchemy import desc
from sqlalchemy.orm import Session

from core.models import Guide
from guides.schemas import GuideCreateUpdateSchema


def get_list_of_guides(db: Session) -> list[Guide] | None:
    guides = db.query(Guide).order_by(desc(Guide.last_modified)).all()
    return guides


def save_guide(db: Session, data: GuideCreateUpdateSchema, user_id: int, guide=None) -> Guide:
    if not guide:
        guide = Guide()
    guide.title = data.title
    guide.content = data.content
    guide.user_id = user_id
    db.add(guide)
    db.commit()
    db.refresh(guide)
    return guide
