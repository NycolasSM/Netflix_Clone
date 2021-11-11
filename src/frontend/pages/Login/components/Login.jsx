import React, { useEffect, useState } from 'react'
import './Login.css'

const Login = ({
  loginOrSiginChange
}) => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })


  useEffect(() => {
    // axios.get('http://localhost:3001/users/')
    // .then(resp => {
    // setUsers(resp.data)
    // })
  }, [])


  function formChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }


  return (
    <div className="loginFormContainer">
      <form className="loginForm">
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
        <div className="registerNow">
          <span>Novo por aqui?</span>
          <a onClick={() => loginOrSiginChange("Sign")}>Assine agora</a>
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
