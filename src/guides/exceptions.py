from fastapi import HTTPException, status


def not_instructor_exception():
    """Raises when user is not an instructor"""
    exception = HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                              detail="You are not an instructor")
    return exception
