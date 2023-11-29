import React from 'react';
import { useState } from 'react';


function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleImageAnalysis = () => {
    // Perform image analysis logic here
    console.log('Image analysis triggered');
  };

  const handleImageGeneration = () => {
    // Perform image generation logic here
    console.log('Image generation triggered');
  };

  return (
    <div>
      <h1>Title</h1>
      <input type="text" value={imageUrl} onChange={handleImageUrlChange} placeholder="Enter image URL" />
      <input type="text" value={prompt} onChange={handlePromptChange} placeholder="Enter prompt" />
      <button onClick={handleImageAnalysis}>Analyze Image</button>
      <button onClick={handleImageGeneration}>Generate Image</button>
    </div>
  );
}

export default App;
