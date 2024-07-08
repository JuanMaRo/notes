from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.database import engine, Base
from routers.noteRouter import note_router

app = FastAPI()
app.title = "Notes docs"
app.version = "0.0.1"

origins = [
    "http://localhost:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(note_router)

Base.metadata.create_all(bind=engine)
