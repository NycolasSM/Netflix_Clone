import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { UserInfoProvider } from './frontend/providers/userInfo';

import Router from './frontend/pages/Router'


ReactDOM.render(
  <React.StrictMode>
    <UserInfoProvider>
      <Router />
    </UserInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);