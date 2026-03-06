function PromptInput({ prompt, setPrompt, onGenerate }) {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter thumbnail idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={onGenerate}>
        Generate
      </button>
    </div>
  );
}

export default PromptInput;