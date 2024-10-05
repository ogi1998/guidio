from fastapi import FastAPI
from starlette.staticfiles import StaticFiles

import core.service as core_service
from auth import router as auth_router
from core.config import settings
from core.constants import MEDIA_ROOT
from core.middlewares import ExceptionHandlingMiddleware
from guides import router as guides_router
from users import router as users_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url="/openapi.json" if settings.ENVIRONMENT == 'local' else None,
)
app.add_middleware(ExceptionHandlingMiddleware)
core_service.create_media_root()
app.mount("/media", StaticFiles(directory=MEDIA_ROOT), name="media")
app.include_router(auth_router.router,
                   prefix="/auth",
                   tags=["auth"])
app.include_router(users_router.router,
                   prefix="/users",
                   tags=["users"])
app.include_router(guides_router.router,
                   prefix="/guides",
                   tags=["guides"])
