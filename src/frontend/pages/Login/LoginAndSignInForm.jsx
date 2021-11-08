import React from 'react'
import './LoginAndSignInForm.css'

import Login from './components/Login.jsx'
import SignIn from './components/SignIn.jsx'

const LoginAndSiginInForm = () => {
  return (
    <section className="loginAndSignInForm">
      <Login />
      <div className="loginAndSignInFormVerticalLine"></div>
      <SignIn />
    </section>
  )
}

export default LoginAndSiginInForm
