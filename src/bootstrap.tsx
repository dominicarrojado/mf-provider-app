import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './bootstrap.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App brandAnchor={{ href: import.meta.env.BASE_URL }} />
    </React.StrictMode>
  );
}
