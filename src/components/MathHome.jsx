import React from 'react';
import { MATH_ACTIVITIES } from '../data/mathData';

export default function MathHome({ onSelectActivity }) {
  return (
    <div className="setup-screen animate-item" style={{ maxWidth: '650px', margin: '0 auto' }}>
      <h1 className="setup-title" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)' }}>
        🦖 DINO MATH 🌋
      </h1>
      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: '#78909c', marginBottom: '1.2rem', marginTop: '-0.8rem' }}>
        Play & Learn Math with Dino Friends!
      </p>

      <div className="math-activity-grid">
        <button 
          className="mode-card math-card card-numbers"
          onClick={() => onSelectActivity(MATH_ACTIVITIES.addition.id)}
        >
          <span className="mode-icon">➕</span>
          <div className="mode-info">
            <h2>{MATH_ACTIVITIES.addition.title}</h2>
            <p>{MATH_ACTIVITIES.addition.subtitle}</p>
          </div>
        </button>

        <button 
          className="mode-card math-card card-telugu"
          onClick={() => onSelectActivity(MATH_ACTIVITIES.subtraction.id)}
        >
          <span className="mode-icon">➖</span>
          <div className="mode-info">
            <h2>{MATH_ACTIVITIES.subtraction.title}</h2>
            <p>{MATH_ACTIVITIES.subtraction.subtitle}</p>
          </div>
        </button>

        <button 
          className="mode-card math-card card-letters"
          onClick={() => onSelectActivity(MATH_ACTIVITIES.multiplication.id)}
        >
          <span className="mode-icon">✖️</span>
          <div className="mode-info">
            <h2>{MATH_ACTIVITIES.multiplication.title}</h2>
            <p>{MATH_ACTIVITIES.multiplication.subtitle}</p>
          </div>
        </button>

        <button 
          className="mode-card math-card card-words"
          onClick={() => onSelectActivity(MATH_ACTIVITIES.division.id)}
        >
          <span className="mode-icon">➗</span>
          <div className="mode-info">
            <h2>{MATH_ACTIVITIES.division.title}</h2>
            <p>{MATH_ACTIVITIES.division.subtitle}</p>
          </div>
        </button>

        <button 
          className="mode-card math-card card-mixed"
          onClick={() => onSelectActivity(MATH_ACTIVITIES.mixedMath.id)}
          style={{ gridColumn: '1 / -1' }}
        >
          <span className="mode-icon">🧠</span>
          <div className="mode-info">
            <h2>{MATH_ACTIVITIES.mixedMath.title}</h2>
            <p>{MATH_ACTIVITIES.mixedMath.subtitle}</p>
          </div>
        </button>
      </div>
    </div>
  );
}
