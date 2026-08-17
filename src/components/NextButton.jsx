import React from 'react';

export default function NextButton({ onClick, label = "NEXT ➜" }) {
  return (
    <button className="next-btn" onClick={onClick}>
      {label}
    </button>
  );
}
