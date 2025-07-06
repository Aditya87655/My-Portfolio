// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // No .jsx extension needed here, it's inferred
import './index.css'; // Import your Tailwind CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);