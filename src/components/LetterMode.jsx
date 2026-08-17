import React, { useState } from 'react';

export default function LetterMode({ onStart }) {
  const [mode, setMode] = useState('capital'); // 'capital', 'small', or 'both'

  return (
    <div className="setup-screen animate-item">
      <h1 className="setup-title">LET'S LEARN ABC! 🔤</h1>
      
      <div className="choices-container">
        <button 
          className={`choice-card ${mode === 'capital' ? 'selected' : ''}`}
          onClick={() => setMode('capital')}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">🔠</span>
            <div className="choice-text">
              <h3>CAPITAL</h3>
              <p>A B C</p>
            </div>
          </div>
        </button>

        <button 
          className={`choice-card ${mode === 'small' ? 'selected' : ''}`}
          onClick={() => setMode('small')}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">🔡</span>
            <div className="choice-text">
              <h3>SMALL</h3>
              <p>a b c</p>
            </div>
          </div>
        </button>

        <button 
          className={`choice-card ${mode === 'both' ? 'selected' : ''}`}
          onClick={() => setMode('both')}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">🔤</span>
            <div className="choice-text">
              <h3>BOTH</h3>
              <p>A a B b</p>
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
