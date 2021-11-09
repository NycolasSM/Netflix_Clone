import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MoviePage from './frontend/pages/Movies/MoviesPage.jsx'

// TESTE
import Login from './frontend/pages/Login/LoginAndSignInForm'

ReactDOM.render(
  <React.StrictMode>
    <MoviePage />
  </React.StrictMode>,
  document.getElementById('root')
);
