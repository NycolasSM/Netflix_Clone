import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MoviesPage from './frontend/pages/Movies/MoviesPage.jsx'

import Login from './frontend/pages/Login/LoginAndSignInForm'
import SelectProfile from './frontend/pages/SelectProfile/SelectProfile'

ReactDOM.render(
  <React.StrictMode>
    <MoviesPage />
  </React.StrictMode>,
  document.getElementById('root')
);
