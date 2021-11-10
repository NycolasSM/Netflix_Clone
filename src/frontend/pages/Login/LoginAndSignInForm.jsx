import React from 'react'
import './LoginAndSignInForm.css'

import Login from './components/Login.jsx'
import SignIn from './components/SignIn.jsx'

const LoginAndSiginInForm = () => {
  return (
    <section className="loginAndSignInForm">
      <img className="backgroundLoginImg" src="https://pipocasclub.com.br/wp-content/uploads/2019/10/netflix-3.jpg" alt="" />
      <section className="loginWindow">
        <Login />
        {/* <div className="loginAndSignInFormVerticalLine"></div> */}
        {/* <SignIn /> */}
      </section>
    </section>
  )
}

export default LoginAndSiginInForm
