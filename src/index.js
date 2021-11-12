import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './frontend/pages/Login/LoginAndSignInForm'
import SelectProfile from './frontend/pages/SelectProfile/SelectProfile'
import MoviesPage from './frontend/pages/Movies/MoviesPage.jsx'

ReactDOM.render(
  <React.StrictMode>
    <SelectProfile />
  </React.StrictMode>,
  document.getElementById('root')
);
