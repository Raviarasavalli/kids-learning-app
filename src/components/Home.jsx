import React from 'react';

export default function Home({ onSelectMode }) {
  return (
    <div className="home-screen animate-item">
      <img 
        src="/images/home_banner.jpg" 
        alt="Kids learning at desk" 
        className="home-illustration"
        onError={(e) => {
          e.target.onerror = null;
          // Fallback image using SVG with a cute rainbow if the AI banner fails or is loading
          e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240' style='background:%23FFF9F0;border-radius:24px;'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Fredoka' font-size='60' fill='%234F7CFF'>🌈</text></svg>";
        }}
      />
      <div className="home-text-side">
        <h1 className="home-title">LET'S LEARN! 🌈</h1>
        <p className="home-subtitle">ABC • NUMBERS • WORDS • TELUGU</p>
        
        <div className="mode-grid">
          <button className="mode-card card-numbers" onClick={() => onSelectMode('numberSetup')}>
            <span className="mode-icon">🔢</span>
            <div className="mode-info">
              <h2>NUMBERS</h2>
              <p>Learn Numbers</p>
            </div>
          </button>
          
          <button className="mode-card card-letters" onClick={() => onSelectMode('letterMode')}>
            <span className="mode-icon">🔤</span>
            <div className="mode-info">
              <h2>ABC</h2>
              <p>Learn Letters</p>
            </div>
          </button>
          
          <button className="mode-card card-words" onClick={() => onSelectMode('words')}>
            <span className="mode-icon">📝</span>
            <div className="mode-info">
              <h2>WORDS</h2>
              <p>Learn Easy Words</p>
            </div>
          </button>

          <button className="mode-card card-telugu" onClick={() => onSelectMode('teluguMode')}>
            <span className="mode-icon">🌺</span>
            <div className="mode-info">
              <h2>తెలుగు (TELUGU)</h2>
              <p>అచ్చులు & హల్లులు</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
