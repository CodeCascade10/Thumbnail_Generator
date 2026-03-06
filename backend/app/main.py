from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.generator import router as generate_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(generate_router, prefix="/api")