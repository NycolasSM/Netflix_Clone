import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MoviesPage from './frontend/pages/Movies/MoviesPage.jsx'

// TESTE
import Login from './frontend/pages/Login/LoginAndSignInForm'

ReactDOM.render(
  <React.StrictMode>
    <MoviesPage />
  </React.StrictMode>,
  document.getElementById('root')
);
