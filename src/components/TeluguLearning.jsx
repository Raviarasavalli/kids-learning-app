import React, { useState } from 'react';
import { teluguVowels, teluguConsonants, allTeluguLetters } from '../data/teluguAlphabet';
import SpeechButton from './SpeechButton';
import NextButton from './NextButton';

const getDataset = (mode) => {
  if (mode === 'vowels') return teluguVowels;
  if (mode === 'consonants') return teluguConsonants;
  return allTeluguLetters;
};

const getNewLetterIdx = (curIdx, dataset) => {
  if (dataset.length <= 1) return 0;
  let nextIdx;
  do {
    nextIdx = Math.floor(Math.random() * dataset.length);
  } while (nextIdx === curIdx);
  return nextIdx;
};

export default function TeluguLearning({ mode, onNext }) {
  const dataset = getDataset(mode);
  const [currentIdx, setCurrentIdx] = useState(() => getNewLetterIdx(null, dataset));
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const handleNext = () => {
    const nextIdx = getNewLetterIdx(currentIdx, dataset);
    setCurrentIdx(nextIdx);
    setImgLoading(true);
    setImgError(false);
    onNext();
  };

  const item = dataset[currentIdx] || dataset[0];
  const typeLabel = item.type === 'vowel' ? 'అచ్చులు (Vowel)' : 'హల్లులు (Consonant)';

  return (
    <div className="learning-screen" key={`${mode}-${currentIdx}`}>
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
          <div className="learning-letter learning-telugu-letter">{item.letter}</div>
          <div className="learning-word learning-telugu-word">{item.word}</div>
          <div className="learning-subtitle" style={{ fontSize: '1rem', color: '#78909c' }}>{typeLabel}</div>
        </div>
      </div>
      
      <div className="controls-row">
        <SpeechButton 
          text={item.pronunciation || item.word} 
          lang={item.language || "te-IN"} 
          label="విను (LISTEN)" 
        />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}
