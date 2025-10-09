// src/main.jsx (ou src/index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/Router'; // Importe seu componente Router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);