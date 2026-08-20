import React, { useState } from 'react';
import { MATH_ACTIVITIES, MATH_LEVELS } from '../data/mathData';

export default function MathLevelSelect({ activityId, onStartGame }) {
  const [selectedLevel, setSelectedLevel] = useState('easy');
  const activity = MATH_ACTIVITIES[activityId] || MATH_ACTIVITIES.addition;

  return (
    <div className="setup-screen animate-item">
      <h1 className="setup-title" style={{ color: activity.color }}>
        {activity.icon} {activity.title}
      </h1>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#546e7a', marginBottom: '1.5rem', marginTop: '-1rem' }}>
        Select Difficulty Level:
      </p>
      
      <div className="choices-container">
        <button 
          className={`choice-card ${selectedLevel === MATH_LEVELS.easy.id ? 'selected' : ''}`}
          onClick={() => setSelectedLevel(MATH_LEVELS.easy.id)}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">{MATH_LEVELS.easy.icon}</span>
            <div className="choice-text">
              <h3>{MATH_LEVELS.easy.title}</h3>
              <p>{MATH_LEVELS.easy.description}</p>
            </div>
          </div>
        </button>

        <button 
          className={`choice-card ${selectedLevel === MATH_LEVELS.medium.id ? 'selected' : ''}`}
          onClick={() => setSelectedLevel(MATH_LEVELS.medium.id)}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">{MATH_LEVELS.medium.icon}</span>
            <div className="choice-text">
              <h3>{MATH_LEVELS.medium.title}</h3>
              <p>{MATH_LEVELS.medium.description}</p>
            </div>
          </div>
        </button>

        <button 
          className={`choice-card ${selectedLevel === MATH_LEVELS.challenge.id ? 'selected' : ''}`}
          onClick={() => setSelectedLevel(MATH_LEVELS.challenge.id)}
        >
          <div className="choice-icon-label">
            <span className="choice-icon">{MATH_LEVELS.challenge.icon}</span>
            <div className="choice-text">
              <h3>{MATH_LEVELS.challenge.title}</h3>
              <p>{MATH_LEVELS.challenge.description}</p>
            </div>
          </div>
        </button>
      </div>

      <button 
        className="action-btn" 
        onClick={() => onStartGame(activityId, selectedLevel)}
        style={{ background: activity.color, boxShadow: `0 8px 0 ${activity.color}bb` }}
      >
        🚀 START GAME
      </button>
    </div>
  );
}
