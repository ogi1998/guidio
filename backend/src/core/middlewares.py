from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware

from core.exceptions import BaseCustomException
from src.core.config import settings


class ExceptionHandlingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        try:
            response = await call_next(request)
            return response
        except BaseCustomException as e:
            return JSONResponse(status_code=e.status_code, content={"detail": e.message})
        except HTTPException as e:
            return JSONResponse(status_code=e.status_code, content={"detail": e.detail})
        except Exception as e:
            if settings.ENVIRONMENT == "local":
                raise e
            else:
                # TODO: add logging
                return JSONResponse(status_code=500, content={"detail": str(e)})
