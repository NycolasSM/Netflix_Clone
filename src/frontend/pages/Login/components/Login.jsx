import React, { useState } from 'react'
import { useNavigate } from 'react-router';

import axios from 'axios'
import './Login.css'

import { useUserInfo } from './../../../providers/userInfo'

const Login = ({
  loginOrSiginChange
}) => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const { setUser } = useUserInfo({

  });

  const [loginError, setLoginError] = useState()

  const navigate = useNavigate();

  async function onSubmitForm(e) {
    e.preventDefault()

    axios.post('http://localhost:3001/system/authenticate', form)
      .then(resp => {

        const userInfoID = resp.data.user._id
        const userInfoToken = resp.data.token

        setUser({
          id: resp.data.user._id,
          token: resp.data.token
        })

        localStorage.setItem("user",JSON.stringify({userInfoID: userInfoID, userInfoToken: userInfoToken}))

        navigate(`/selectProfile`)

      })
      .catch((e) => {
        setLoginError(e.response.data.error)
      })
  }

  function formChange(event) {
    event.preventDefault()

    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }


  return (
    <div className="loginFormContainer">
      <form className="loginForm" onSubmit={onSubmitForm}>
        <h2 className="loginWindowTitle">Entrar</h2>
        <label htmlFor="signEmail"></label>
        <input
          type="text"
          placeholder="Email"
          id="signEmail"
          name="email"
          onChange={formChange}
        />
        <label htmlFor="password"></label>
        <input
          type="text"
          placeholder="Senha"
          id="password"
          name="password"
          onChange={formChange}
        />
        <div className="loginError">
          {loginError}
        </div>
        <button type="submit" >
          Entrar
        </button>
        <div className="rememberUserCheckBoxContainer">
          <input
            className="rememberUserCheckBox"
            type="checkbox"
            id="rememberUserCheckbox"
            name="rememberUserCheckbox">
          </input>
          <label className="rememberUserLabel" htmlFor="rememberUserCheckbox">Lembre-se de mim</label>
          <span>Precisa de ajuda?</span>
        </div>
        <div className="connectWithFacebook">
          <img className="facebookLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png" alt="" />
          <span>Conectar com Facebook</span>
        </div>
        <div className="goToRegister">
          <span>Novo por aqui?</span>
          <span className="goToRegisterButton" onClick={() => loginOrSiginChange()}>Assine agora</span>
        </div>
        <div className="recaptchaInfo">
          <span> Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</span>
          <a href="https://www.google.com/recaptcha/about/">Saiba mais.</a>
        </div>
      </form>
    </div>
  )
}

export default Login
