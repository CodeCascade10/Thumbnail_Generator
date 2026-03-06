export async function generateThumbnail(prompt, style) {

  const enhancedPrompt = `
  viral youtube thumbnail,
  ${style} style,
  shocked youtuber face,
  bright colors,
  high contrast,
  dramatic lighting,
  ${prompt}
  `;

  const response = await fetch(
    "http://127.0.0.1:8000/api/generate-thumbnail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: enhancedPrompt
      })
    }
  );

  const data = await response.json();

  return data.images;
}