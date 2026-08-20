import React, { useState } from 'react';
import { generateMathQuestion, MATH_ACTIVITIES } from '../data/mathData';
import SpeechButton from './SpeechButton';
import NextButton from './NextButton';

export default function DinoMathGame({ activityId, level, onNext }) {
  const [question, setQuestion] = useState(() => generateMathQuestion(activityId, level));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null); // null, 'correct', 'incorrect'

  const handleChoiceClick = (choice) => {
    if (feedback === 'correct') return; // Prevent extra clicks after correct answer

    setSelectedAnswer(choice);
    if (choice === question.answer) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  const handleNextQuestion = () => {
    setFeedback(null);
    setSelectedAnswer(null);
    setQuestion(generateMathQuestion(activityId, level, question.key));
    onNext(); // Notify parent of progress & triggers celebration overlay
  };

  const activity = MATH_ACTIVITIES[activityId] || MATH_ACTIVITIES[question.type] || MATH_ACTIVITIES.addition;

  // Helper to render dino emojis array
  const renderDinos = (count, emoji = question.dinoEmoji, className = '') => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} className={`dino-unit ${className}`}>{emoji}</span>
    ));
  };

  // Render Visual Learning Area based on question type
  const renderVisualArea = () => {
    if (question.type === 'addition') {
      return (
        <div className="math-visual-container">
          <div className="dino-group-box">
            {renderDinos(question.num1, '🦖')}
          </div>
          <span className="math-operator-symbol">+</span>
          <div className="dino-group-box">
            {renderDinos(question.num2, '🦕')}
          </div>
        </div>
      );
    }

    if (question.type === 'subtraction') {
      const remainingCount = question.num1 - question.num2;
      return (
        <div className="math-visual-container flex-column">
          <div className="dino-group-box">
            {renderDinos(remainingCount, '🦖')}
            {renderDinos(question.num2, '🦕', 'taken-away')}
          </div>
          <p className="math-visual-label">
            Start with {question.num1}, take away {question.num2}!
          </p>
        </div>
      );
    }

    if (question.type === 'multiplication') {
      const groupsArray = Array.from({ length: question.num1 }, (_, i) => i);
      return (
        <div className="math-visual-container flex-column">
          <div className="multiplication-groups-wrapper">
            {groupsArray.map((gIdx) => (
              <div key={gIdx} className="dino-group-box group-card">
                {renderDinos(question.num2, '🐊')}
              </div>
            ))}
          </div>
          <p className="math-visual-label">
            {question.num1} groups of {question.num2}
          </p>
        </div>
      );
    }

    if (question.type === 'division') {
      const perNest = question.num1 / question.num2;
      const nestArray = Array.from({ length: question.num2 }, (_, i) => i);
      return (
        <div className="math-visual-container flex-column">
          <div className="division-nests-wrapper">
            {nestArray.map((nIdx) => (
              <div key={nIdx} className="dino-nest-card">
                <span className="nest-icon">🪺</span>
                <div className="nest-dinos">
                  {renderDinos(perNest, '🦖')}
                </div>
              </div>
            ))}
          </div>
          <p className="math-visual-label">
            {question.num1} dinos shared in {question.num2} nests
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="learning-screen math-learning-screen" key={question.key}>
      <div className="learning-content animate-item" style={{ gap: '1rem' }}>
        {/* Operation Indicator Badge for Mixed Math or Activity */}
        <div className="math-type-badge" style={{ backgroundColor: activity.color }}>
          <span>{question.type === 'addition' ? '➕' : question.type === 'subtraction' ? '➖' : question.type === 'multiplication' ? '✖️' : '➗'}</span>
          <span>{question.type.toUpperCase()}</span>
        </div>

        {/* Visual Learning Area */}
        {renderVisualArea()}

        {/* Equation Display */}
        <div className="math-equation-display">
          {feedback === 'correct' ? (
            <span className="equation-text correct-equation">
              {question.num1} {question.symbol} {question.num2} = {question.answer}
            </span>
          ) : (
            <span className="equation-text">
              {question.num1} {question.symbol} {question.num2} = <span className="question-mark">?</span>
            </span>
          )}
        </div>

        {/* Incorrect Feedback Message */}
        {feedback === 'incorrect' && (
          <div className="math-feedback-box error-feedback">
            <span>🦕</span>
            <span>TRY AGAIN!</span>
          </div>
        )}

        {/* Correct Celebration Feedback */}
        {feedback === 'correct' && (
          <div className="math-feedback-box success-feedback">
            <span>🎉 ROAR! GREAT JOB! 🦖</span>
          </div>
        )}

        {/* Answer Choices Buttons */}
        {feedback !== 'correct' && (
          <div className="math-choices-row">
            {question.choices.map((choice) => (
              <button
                key={choice}
                className={`math-choice-btn ${selectedAnswer === choice && feedback === 'incorrect' ? 'wrong-choice' : ''}`}
                onClick={() => handleChoiceClick(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Control Buttons (Speech & Next) */}
      <div className="controls-row">
        <SpeechButton text={question.speechText} label="SAY IT" />
        {feedback === 'correct' && (
          <NextButton onClick={handleNextQuestion} />
        )}
      </div>
    </div>
  );
}
