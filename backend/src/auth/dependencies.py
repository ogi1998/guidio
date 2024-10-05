from jose import jwt, JOSEError

from auth.exceptions import UnauthorizedException, TokenExpiredException
from core.config import settings


async def verify_token(token: str) -> dict:
    if not isinstance(token, str):
        raise UnauthorizedException()
    try:
        payload = jwt.decode(token, key=settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise TokenExpiredException()
    except JOSEError:
        raise UnauthorizedException()
