import React, { useState } from 'react';
import './styles/style.css';
import Home from './components/Home';
import NumberSetup from './components/NumberSetup';
import NumberLearning from './components/NumberLearning';
import LetterMode from './components/LetterMode';
import LetterLearning from './components/LetterLearning';
import WordLearning from './components/WordLearning';
import TeluguMode from './components/TeluguMode';
import TeluguLearning from './components/TeluguLearning';
import MathHome from './components/MathHome';
import MathLevelSelect from './components/MathLevelSelect';
import DinoMathGame from './components/DinoMathGame';
import { MATH_ACTIVITIES } from './data/mathData';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [numRange, setNumRange] = useState({ start: 1, end: 20 });
  const [letterMode, setLetterMode] = useState('capital');
  const [teluguMode, setTeluguMode] = useState('vowels');
  const [mathActivity, setMathActivity] = useState('addition');
  const [mathLevel, setMathLevel] = useState('easy');
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
      }, 1800); // Celebration overlay auto-closes in 1.8 seconds
    }
  };

  // Internal Back button routing logic (NEVER leaves website)
  const handleBack = () => {
    if (screen === 'numberSetup') setScreen('home');
    else if (screen === 'numbers') setScreen('numberSetup');
    else if (screen === 'letterMode') setScreen('home');
    else if (screen === 'letters') setScreen('letterMode');
    else if (screen === 'words') setScreen('home');
    else if (screen === 'teluguMode') setScreen('home');
    else if (screen === 'telugu') setScreen('teluguMode');
    else if (screen === 'mathHome') setScreen('home');
    else if (screen === 'mathLevel') setScreen('mathHome');
    else if (screen === 'mathGame') setScreen('mathLevel');
  };

  // Retrieve current screen title
  const getHeaderTitle = () => {
    if (screen === 'numberSetup' || screen === 'numbers') return 'NUMBERS';
    if (screen === 'letterMode' || screen === 'letters') return 'ABC LETTERS';
    if (screen === 'words') return 'EASY WORDS';
    if (screen === 'teluguMode' || screen === 'telugu') return 'తెలుగు (TELUGU)';
    if (screen === 'mathHome') return 'DINO MATH 🦖';
    if (screen === 'mathLevel' || screen === 'mathGame') {
      const act = MATH_ACTIVITIES[mathActivity];
      return act ? `${act.title} ${act.icon}` : 'DINO MATH';
    }
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

  const handleStartTelugu = (mode) => {
    setTeluguMode(mode);
    setScreen('telugu');
  };

  const handleSelectMathActivity = (activityId) => {
    setMathActivity(activityId);
    setScreen('mathLevel');
  };

  const handleStartMathGame = (activityId, level) => {
    setMathActivity(activityId);
    setMathLevel(level);
    setScreen('mathGame');
  };

  return (
    <div className="app-container">
      {/* Navigation Header (Hidden on home screen to maximize space) */}
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
          <NumberSetup onStart={handleStartNumbers} />
        )}
        {screen === 'numbers' && (
          <NumberLearning 
            start={numRange.start} 
            end={numRange.end} 
            onNext={handleItemCompleted} 
          />
        )}
        {screen === 'letterMode' && (
          <LetterMode onStart={handleStartLetters} />
        )}
        {screen === 'letters' && (
          <LetterLearning 
            mode={letterMode} 
            onNext={handleItemCompleted} 
          />
        )}
        {screen === 'words' && (
          <WordLearning 
            onNext={handleItemCompleted} 
          />
        )}
        {screen === 'teluguMode' && (
          <TeluguMode onStart={handleStartTelugu} />
        )}
        {screen === 'telugu' && (
          <TeluguLearning 
            mode={teluguMode} 
            onNext={handleItemCompleted} 
          />
        )}
        {screen === 'mathHome' && (
          <MathHome onSelectActivity={handleSelectMathActivity} />
        )}
        {screen === 'mathLevel' && (
          <MathLevelSelect 
            activityId={mathActivity} 
            onStartGame={handleStartMathGame} 
          />
        )}
        {screen === 'mathGame' && (
          <DinoMathGame 
            activityId={mathActivity} 
            level={mathLevel} 
            onNext={handleItemCompleted} 
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
