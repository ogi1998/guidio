import uvicorn
from fastapi import FastAPI

from auth import router as auth_router
from database import engine
from users import models, router as users_router

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_router.router,
                   prefix="/auth",
                   tags=["auth"])
app.include_router(users_router.router,
                   prefix="/users",
                   tags=["users"])

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)
