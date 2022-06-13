import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App";
import "./i18n";

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('app-component'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
