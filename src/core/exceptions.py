from fastapi import HTTPException, status


def non_existent_page_exception():
    return HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Requested a non-existent page", )
