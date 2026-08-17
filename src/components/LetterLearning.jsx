import React, { useState } from 'react';
import { letters } from '../data/letters';
import SpeechButton from './SpeechButton';
import NextButton from './NextButton';

const getNewLetterIdx = (curIdx, count) => {
  if (count <= 1) return 0;
  let nextIdx;
  do {
    nextIdx = Math.floor(Math.random() * count);
  } while (nextIdx === curIdx);
  return nextIdx;
};

const getInitialCapitalState = (mode) => {
  if (mode === 'capital') return true;
  if (mode === 'small') return false;
  return Math.random() < 0.5;
};

export default function LetterLearning({ mode, onNext }) {
  const [currentIdx, setCurrentIdx] = useState(() => getNewLetterIdx(null, letters.length));
  const [isCapital, setIsCapital] = useState(() => getInitialCapitalState(mode));
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const handleNext = () => {
    const nextIdx = getNewLetterIdx(currentIdx, letters.length);
    setCurrentIdx(nextIdx);
    setImgLoading(true);
    setImgError(false);
    
    if (mode === 'capital') {
      setIsCapital(true);
    } else if (mode === 'small') {
      setIsCapital(false);
    } else {
      setIsCapital(Math.random() < 0.5);
    }
    onNext();
  };

  const item = letters[currentIdx];
  const activeLetter = isCapital ? item.capital : item.small;
  const letterTypeLabel = isCapital ? `Capital ${item.capital}` : `Small ${item.small}`;
  const speechText = isCapital ? `Capital ${item.capital}. ${item.word}.` : `Small ${item.small}. ${item.word}.`;

  return (
    <div className="learning-screen" key={`${currentIdx}-${isCapital}`}>
      <div className="learning-content animate-item">
        <div className="learning-illust-wrapper">
          {item.image && !imgError ? (
            <>
              <img 
                src={item.image} 
                alt={item.word} 
                className="learning-illust"
                onLoad={() => setImgLoading(false)}
                onError={() => setImgError(true)}
                style={{ display: imgLoading ? 'none' : 'block' }}
              />
              {imgLoading && (
                <div className="learning-illust-fallback">
                  {item.emoji}
                </div>
              )}
            </>
          ) : (
            <div className="learning-illust-fallback" style={{ display: 'flex' }}>
              {item.emoji}
            </div>
          )}
        </div>
        
        <div className="learning-text-side">
          <div className="learning-letter">{activeLetter}</div>
          <div className="learning-subtitle">{letterTypeLabel} for {item.word}</div>
        </div>
      </div>
      
      <div className="controls-row">
        <SpeechButton text={speechText} label="SAY IT" />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}
