import React from 'react';

export default function SpeechButton({ text, label = "SAY IT" }) {
  const speak = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech to avoid overlaps
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      
      // Try to find an English voice
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(v => v.lang.startsWith('en') || v.lang.includes('EN'));
      if (enVoice) {
        utterance.voice = enVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis is not supported in this browser.");
    }
  };

  return (
    <button className="speech-btn" onClick={speak} aria-label={`Pronounce ${text}`}>
      🔊 {label}
    </button>
  );
}
