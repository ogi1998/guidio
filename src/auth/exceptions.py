from fastapi import HTTPException, status


def invalid_credentials_exception():
    """Return HTTPException 401 for invalid credentials"""
    response = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    return response


def token_exception():
    """Return HTTPException 401 for invalid token"""
    token_exception_response = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authorization token. Try clearing your cookies and login again.",
        headers={"WWW-Authenticate": "Bearer"},
    )
    return token_exception_response
