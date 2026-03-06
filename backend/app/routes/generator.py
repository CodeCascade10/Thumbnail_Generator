from fastapi import APIRouter
from pydantic import BaseModel
from app.services.image_service import generate_thumbnail

router = APIRouter()

class PromptRequest(BaseModel):
    prompt: str


@router.post("/generate-thumbnail")
def generate_image(data: PromptRequest):

    result = generate_thumbnail(data.prompt)

    return {
        "images": result["images"]
    }