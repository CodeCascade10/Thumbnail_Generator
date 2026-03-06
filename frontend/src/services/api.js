const API_URL = "https://thumbnail-generator-backend.onrender.com";

export async function generateThumbnail(prompt, style) {

  const enhancedPrompt = `
  viral youtube thumbnail,
  ${style} style,
  bright colors,
  dramatic lighting,
  shocked youtuber face,
  ${prompt}
  `;

  const response = await fetch(`${API_URL}/api/generate-thumbnail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: enhancedPrompt
    })
  });

  const data = await response.json();

  return data.images;
}