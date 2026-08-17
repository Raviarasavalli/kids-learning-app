import React, { useState } from 'react';
import { words } from '../data/words';
import SpeechButton from './SpeechButton';
import NextButton from './NextButton';

const getNewWordIdx = (curIdx, count) => {
  if (count <= 1) return 0;
  let nextIdx;
  do {
    nextIdx = Math.floor(Math.random() * count);
  } while (nextIdx === curIdx);
  return nextIdx;
};

export default function WordLearning({ onNext }) {
  const [currentIdx, setCurrentIdx] = useState(() => getNewWordIdx(null, words.length));
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const handleNext = () => {
    const nextIdx = getNewWordIdx(currentIdx, words.length);
    setCurrentIdx(nextIdx);
    setImgLoading(true);
    setImgError(false);
    onNext();
  };

  const item = words[currentIdx];

  return (
    <div className="learning-screen" key={currentIdx}>
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
          <div className="learning-word">{item.word}</div>
        </div>
      </div>
      
      <div className="controls-row">
        <SpeechButton text={item.word.toLowerCase()} label="SAY IT" />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}
