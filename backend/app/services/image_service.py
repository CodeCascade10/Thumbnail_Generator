import requests
import base64
from app.config import HF_TOKEN, HF_MODEL_URL


def generate_thumbnail(prompt):

    headers = {
        "Authorization": f"Bearer {HF_TOKEN}"
    }

    payload = {
        "inputs": prompt
    }

    images = []

    # generate 4 images
    for _ in range(4):

        response = requests.post(
            HF_MODEL_URL,
            headers=headers,
            json=payload
        )

        if response.status_code != 200:
            raise Exception(f"Image generation failed: {response.text}")

        image_base64 = base64.b64encode(response.content).decode("utf-8")

        images.append(image_base64)

    return {
        "status": "success",
        "images": images
    }