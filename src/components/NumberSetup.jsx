import React, { useState } from 'react';

export default function NumberSetup({ onStart }) {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(20);
  const [error, setError] = useState("");

  const handleStart = () => {
    const s = parseInt(start, 10);
    const e = parseInt(end, 10);
    
    if (isNaN(s) || isNaN(e) || s < 1 || e < 1) {
      setError("Please check the numbers 😊");
      return;
    }
    
    if (s > e) {
      setError("Please choose a smaller starting number 😊");
      return;
    }
    
    setError("");
    onStart(s, e);
  };

  return (
    <div className="setup-screen animate-item">
      <h1 className="setup-title">LET'S LEARN NUMBERS! 🔢</h1>
      
      <div className="setup-inputs">
        <div className="input-group">
          <label className="input-label" htmlFor="startNum">Start Number</label>
          <input 
            id="startNum"
            type="number" 
            className="input-number" 
            value={start} 
            onChange={(e) => setStart(e.target.value)} 
            min="1"
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="endNum">End Number</label>
          <input 
            id="endNum"
            type="number" 
            className="input-number" 
            value={end} 
            onChange={(e) => setEnd(e.target.value)} 
            min="1"
          />
        </div>
      </div>

      {error && <p className="setup-error">{error}</p>}

      <button className="action-btn" onClick={handleStart}>
        🚀 START LEARNING
      </button>
    </div>
  );
}
