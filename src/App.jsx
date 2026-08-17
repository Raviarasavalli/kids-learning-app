import React, { useState } from 'react';
import './styles/style.css';
import Home from './components/Home';
import NumberSetup from './components/NumberSetup';
import NumberLearning from './components/NumberLearning';
import LetterMode from './components/LetterMode';
import LetterLearning from './components/LetterLearning';
import WordLearning from './components/WordLearning';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [numRange, setNumRange] = useState({ start: 1, end: 20 });
  const [letterMode, setLetterMode] = useState('capital');
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  // Handle next item transition
  const handleItemCompleted = () => {
    const newScore = score + 1;
    setScore(newScore);

    // Trigger celebration after every 5 completed questions
    if (newScore > 0 && newScore % 5 === 0) {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
      }, 1800); // Celebration overlays auto-closes in 1.8 seconds
    }
  };

  // Back button routing logic
  const handleBack = () => {
    if (screen === 'numberSetup') setScreen('home');
    else if (screen === 'numbers') setScreen('numberSetup');
    else if (screen === 'letterMode') setScreen('home');
    else if (screen === 'letters') setScreen('letterMode');
    else if (screen === 'words') setScreen('home');
  };

  // Retrieve current screen title
  const getHeaderTitle = () => {
    if (screen === 'numberSetup' || screen === 'numbers') return 'NUMBERS';
    if (screen === 'letterMode' || screen === 'letters') return 'ABC LETTERS';
    if (screen === 'words') return 'EASY WORDS';
    return '';
  };

  // Setup start actions
  const handleStartNumbers = (start, end) => {
    setNumRange({ start, end });
    setScreen('numbers');
  };

  const handleStartLetters = (mode) => {
    setLetterMode(mode);
    setScreen('letters');
  };

  return (
    <div className="app-container">
      {/* Navigation Header (Hidden on home screen to maximize banner space) */}
      {screen !== 'home' && (
        <header className="app-header">
          <button className="back-btn" onClick={handleBack}>
            ← BACK
          </button>
          <div className="header-title">{getHeaderTitle()}</div>
          <div className="star-counter">
            <span>⭐</span>
            <span>{score}</span>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {screen === 'home' && (
          <Home onSelectMode={setScreen} />
        )}
        {screen === 'numberSetup' && (
          <NumberSetup onStart={handleStartNumbers} onBack={handleBack} />
        )}
        {screen === 'numbers' && (
          <NumberLearning 
            start={numRange.start} 
            end={numRange.end} 
            onNext={handleItemCompleted} 
            onBack={handleBack} 
          />
        )}
        {screen === 'letterMode' && (
          <LetterMode onStart={handleStartLetters} onBack={handleBack} />
        )}
        {screen === 'letters' && (
          <LetterLearning 
            mode={letterMode} 
            onNext={handleItemCompleted} 
            onBack={handleBack} 
          />
        )}
        {screen === 'words' && (
          <WordLearning 
            onNext={handleItemCompleted} 
            onBack={handleBack} 
          />
        )}
      </main>

      {/* Celebration Modal Overlay */}
      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-content">
            <span className="celebration-emoji">🎉</span>
            <h2 className="celebration-text">GREAT JOB!</h2>
            <span className="celebration-emoji" style={{ animationDelay: '0.2s' }}>⭐</span>
          </div>
        </div>
      )}
    </div>
  );
}
