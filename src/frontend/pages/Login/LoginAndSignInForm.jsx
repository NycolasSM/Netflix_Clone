import React, { useState, useEffect } from 'react'
import './LoginAndSignInForm.css'

import Login from './components/Login.jsx'
import SignIn from './components/SignIn.jsx'

const LoginAndSiginInForm = ({
  changePage
}) => {

  const [changeFormAnimValue, setChangeFormAnimValue] = useState(200)

  const setOptionLogin = () => {
    setChangeFormAnimValue(200)
  }

  const setOptionSign = () => {
    setChangeFormAnimValue(-200)
  }

  const asdchangePage = (option) => {
  }


  return (
    <section className="loginAndSignInForm">
      <img className="backgroundLoginImg" src="https://pipocasclub.com.br/wp-content/uploads/2019/10/netflix-3.jpg" alt="" />
      <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      </a>
      <div className="loginWindowContainer">
        <section className="loginWindow">
          <div className="loginWindowItems" style={{ transform: `translateX(${changeFormAnimValue}px)` }} >
            <Login loginOrSiginChange={setOptionSign} changePage={changePage}/>
            <SignIn loginOrSiginChange={setOptionLogin} />
          </div>
        </section>
      </div>
    </section>
  )
}

export default LoginAndSiginInForm
