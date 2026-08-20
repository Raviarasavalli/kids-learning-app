import React from 'react';
import { MATH_ACTIVITIES } from '../data/mathData';

export default function MathHome({ onSelectActivity }) {
  const activities = [
    { ...MATH_ACTIVITIES.addition, iconDisplay: '🦖', subtitle: 'Add the Dinosaurs' },
    { ...MATH_ACTIVITIES.subtraction, iconDisplay: '🦕', subtitle: 'Take Away Dinosaurs' },
    { ...MATH_ACTIVITIES.multiplication, iconDisplay: '🐊', subtitle: 'Dino Groups' },
    { ...MATH_ACTIVITIES.division, iconDisplay: '🥚', subtitle: 'Share Dino Nests' },
    { ...MATH_ACTIVITIES.mixedMath, iconDisplay: '🧠', subtitle: 'Brain Challenge' },
  ];

  return (
    <div className="math-home-container animate-item">
      <p className="math-home-subtitle">Learn Math with Dino Friends!</p>

      <div className="math-grid">
        {activities.map((act) => (
          <button 
            key={act.id}
            className={`math-activity-card card-${act.id}`}
            onClick={() => onSelectActivity(act.id)}
          >
            <div className="math-card-icon">{act.iconDisplay}</div>
            <div className="math-card-info">
              <h2>{act.title}</h2>
              <p>{act.subtitle}</p>
            </div>
            <span className="math-card-arrow">➜</span>
          </button>
        ))}
      </div>
    </div>
  );
}
