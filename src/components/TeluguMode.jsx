import React, { useState } from 'react';

export default function TeluguMode({ onStart }) {
  const [mode, setMode] = useState('vowels'); // 'vowels', 'consonants', or 'both'

  return (
    <div className="setup-screen animate-item">
      <h1 className="setup-title">తెలుగు నేర్చుకుందాం! 🌺</h1>
      
      <div className="choices-container">
        <button 
          className={`choice-card ${mode === 'vowels' ? 'selected' : ''}`}
          onClick={() => setMode('vowels')}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">🌺</span>
            <div className="choice-text">
              <h3>అచ్చులు</h3>
              <p>అ ఆ ఇ ఈ...</p>
            </div>
          </div>
        </button>

        <button 
          className={`choice-card ${mode === 'consonants' ? 'selected' : ''}`}
          onClick={() => setMode('consonants')}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">🔤</span>
            <div className="choice-text">
              <h3>హల్లులు</h3>
              <p>క గ చ జ...</p>
            </div>
          </div>
        </button>

        <button 
          className={`choice-card ${mode === 'both' ? 'selected' : ''}`}
          onClick={() => setMode('both')}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">📚</span>
            <div className="choice-text">
              <h3>అన్నీ (BOTH)</h3>
              <p>అచ్చులు + హల్లులు</p>
            </div>
          </div>
        </button>
      </div>

      <button className="action-btn" onClick={() => onStart(mode)}>
        🚀 START LEARNING
      </button>
    </div>
  );
}
