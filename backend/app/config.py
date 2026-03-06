import os
from dotenv import load_dotenv

load_dotenv()

HF_TOKEN = os.getenv("HF_TOKEN")

HF_MODEL_URL = "https://router.huggingface.co/hf-inference/models/stabilityai/sd-turbo"