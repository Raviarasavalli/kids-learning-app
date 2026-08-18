import React from 'react';

export default function SpeechButton({ text, lang = "en-US", label = "SAY IT" }) {
  const speak = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech to avoid overlaps
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      
      // Match voice language prefix (e.g., 'te' for Telugu or 'en' for English)
      const voices = window.speechSynthesis.getVoices();
      const targetLangPrefix = lang.split('-')[0].toLowerCase();
      const matchedVoice = voices.find(v => 
        v.lang.toLowerCase().startsWith(targetLangPrefix) || 
        v.lang.toLowerCase().includes(targetLangPrefix)
      );
      
      if (matchedVoice) {
        utterance.voice = matchedVoice;
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
