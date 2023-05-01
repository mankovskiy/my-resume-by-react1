import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './styles/reset.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-resume-by-react1">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// knknkn
