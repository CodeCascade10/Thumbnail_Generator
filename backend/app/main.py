from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.generator import router as generate_router

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://thumbnail-generator-rosy.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(generate_router, prefix="/api")