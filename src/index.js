import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { UserInfoProvider } from './frontend/providers/userInfo';

import App from './frontend/pages/App'


ReactDOM.render(
  <React.StrictMode>
    <UserInfoProvider>
      <App />
    </UserInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



{/* <BrowserRouter>
<Routes>
  <Route path="/home" element={<MoviesPage />} />
  <Route path="/selectProfile" element={<SelectProfile />} />
  <Route path="/" element={<Login />} />
</Routes>
</BrowserRouter> */}