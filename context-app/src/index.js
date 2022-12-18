import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeChanger from './Context/ThemeChanger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeChanger>
    <App />
  </ThemeChanger>
);