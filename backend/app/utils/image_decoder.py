import base64

def save_base64_image(base64_string, filename="generated_thumbnail.jpg"):
    
    # decode base64 image
    image_bytes = base64.b64decode(base64_string)

    # save image
    with open(filename, "wb") as f:
        f.write(image_bytes)

    print(f"Image saved as {filename}")