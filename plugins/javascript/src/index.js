import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);

if (module.hot) {
  module.hot.accept();
}
