from fastapi import HTTPException, status


def guides_not_found_exception():
    return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Guides not found")


def not_instructor_exception():
    """Raises when user is not an instructor"""
    exception = HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                              detail="You are not an instructor")
    return exception
