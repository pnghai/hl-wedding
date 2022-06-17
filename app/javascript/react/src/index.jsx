import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App";
import "./i18n";
import Store from "./components/store";

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('app-component'));
  root.render(
    <React.StrictMode>
      <Store>
        <App />
      </Store>
    </React.StrictMode>
  );
});
