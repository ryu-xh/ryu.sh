import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

const container = document.getElementById('root') as HTMLElement;

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The page is prerendered (SSG), so hydrate the existing markup.
// Fall back to a fresh render if the container is somehow empty.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
