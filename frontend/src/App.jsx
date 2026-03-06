import { useState } from "react";

import PromptInput from "./components/PromptInput";
import StyleSelector from "./components/StyleSelector";
import Loader from "./components/Loader";
import ImagePreview from "./components/ImagePreview";
import DownloadButton from "./components/DownloadButton";

import { generateThumbnail } from "./services/api";

function App() {

  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("mrbeast");
  const [images, setImages] = useState([]);   // FIXED
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {

    if (!prompt) return;

    setLoading(true);

    try {

      const results = await generateThumbnail(prompt, style);

      setImages(results);

    } catch (error) {

      console.error(error);

    }

    setLoading(false);
  };

  return (
    <div className="container">

      <h1>AI Thumbnail Generator</h1>

      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        onGenerate={handleGenerate}
      />

      <StyleSelector
        style={style}
        setStyle={setStyle}
      />

      {loading && <Loader />}

      <ImagePreview images={images} />

      {images.length > 0 && (
        <DownloadButton image={images[0]} />
      )}

    </div>
  );
}

export default App;