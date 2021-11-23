import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './frontend/pages/Login/LoginAndSignInForm'
import SelectProfile from './frontend/pages/SelectProfile/ProfilesPage'
import MoviesPage from './frontend/pages/Movies/MoviesPage.jsx'
import { UserInfoProvider } from './frontend/providers/userInfo';


ReactDOM.render(
  <React.StrictMode>
    <UserInfoProvider>
      <Login />
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