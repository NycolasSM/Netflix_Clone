import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Login from './Login/LoginAndSignInForm'
import SelectProfile from './SelectProfile/ProfilesPage'
import MoviesPage from './Movies/MoviesPage.jsx'

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/selectProfile" element={<SelectProfile />} />
        <Route path="/moviesList" element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router