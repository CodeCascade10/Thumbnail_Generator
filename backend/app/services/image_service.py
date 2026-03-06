import requests
import base64
from app.config import HF_TOKEN, HF_MODEL_URL


def generate_thumbnail(prompt):

    if not HF_TOKEN:
        raise Exception("HF_TOKEN is missing")

    headers = {
        "Authorization": f"Bearer {HF_TOKEN}",
        "Content-Type": "application/json"
    }

    payload = {
        "inputs": prompt
    }

    images = []

    for _ in range(4):

        response = requests.post(
            HF_MODEL_URL,
            headers=headers,
            json=payload,
            timeout=60
        )

        if response.status_code != 200:
            print("HF ERROR:", response.text)
            raise Exception(response.text)

        image_base64 = base64.b64encode(response.content).decode("utf-8")

        images.append(image_base64)

    return {
        "images": images
    }