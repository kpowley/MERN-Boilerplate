// Packages
import React, { useState } from 'react';

const Hello = () => {
  // Introduce state
  const [introText, setIntroText] = useState('Loading...');

  // Demo API call to backend
  fetch('/api')
    .then(res => res.json())
    .then(data => {
      setIntroText(data.text);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Render
  return <h1>{introText}</h1>;
};

export default Hello;
