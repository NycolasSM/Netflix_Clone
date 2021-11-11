import React, { useState } from 'react'
import './LoginAndSignInForm.css'

import Login from './components/Login.jsx'
import SignIn from './components/SignIn.jsx'

const LoginAndSiginInForm = () => {

  const [loginOrSigin, setLoginOrSigin] = useState("Login")

  const loginOrSiginChange = (option) => {
    setLoginOrSigin(option)
  }  
  return (
    <section className="loginAndSignInForm">
      <img className="backgroundLoginImg" src="https://pipocasclub.com.br/wp-content/uploads/2019/10/netflix-3.jpg" alt="" />
      <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      </a>
      <section className="loginWindow">
        {loginOrSigin === "Login" ? <Login loginOrSiginChange={loginOrSiginChange} /> : <SignIn loginOrSiginChange={loginOrSiginChange} />}
      </section>
    </section>
  )
}

export default LoginAndSiginInForm
