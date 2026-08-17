import React, { useState } from 'react';
import SpeechButton from './SpeechButton';
import NextButton from './NextButton';

// Utility to convert numbers to friendly words
const numberToWords = (num) => {
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
  if (num === 0) return "Zero";
  if (num < 20) return ones[num];
  if (num < 100) {
    return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");
  }
  if (num < 1000) {
    return ones[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " and " + numberToWords(num % 100) : "");
  }
  return num.toString();
};

const getNewNumber = (cur, start, end) => {
  if (start === end) return start;
  let nextNum;
  do {
    nextNum = Math.floor(Math.random() * (end - start + 1)) + start;
  } while (nextNum === cur);
  return nextNum;
};

export default function NumberLearning({ start, end, onNext }) {
  // Initialize state directly from the helper function
  const [current, setCurrent] = useState(() => getNewNumber(null, start, end));

  const handleNext = () => {
    const nextNum = getNewNumber(current, start, end);
    setCurrent(nextNum);
    onNext(); // Notify parent of progress
  };

  const spelledWord = numberToWords(current);

  return (
    <div className="learning-screen" key={current}>
      <div className="learning-content animate-item">
        <div className="learning-text-side">
          <div className="learning-number">{current}</div>
          <div className="learning-subtitle">{spelledWord}</div>
        </div>
      </div>
      
      <div className="controls-row">
        <SpeechButton text={spelledWord.toLowerCase()} label="SAY IT" />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}
