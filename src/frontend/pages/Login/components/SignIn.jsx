import React, { useState } from 'react'
import axios from 'axios'
import './SignIn.css'

const SignIn = ({
  loginOrSiginChange
}) => {

  // TODO precisa fazer a verificação no backend

  const [form, setForm] = useState({
    email: "",
    userName: "",
    password: "",
    favoriteItens: [],
    profiles: [],
  })

  const [signError, setSignError] = useState()

  function onSubmitForm(event) {
    event.preventDefault();

    let userNameIsSet = false
    let passwordConfirm = false
    let emailIsSet = false
    let passwordIsSet = false

    function verifyIfUserIsSet() {
      if (form.name === "") {
        alert("precisa inserir um nome")
        userNameIsSet = false
      } else {
        userNameIsSet = true
      }
    }

    function verifyIfEmailIsSet() {
      if (form.email === "") {
        alert("precisa inserir um email")
        emailIsSet = false
      } else {
        emailIsSet = true
      }
    }

    function verifyIfPasswordIsSet() {
      if (emailIsSet === true) {
        if (form.password === "") {
          alert("precisa inserir uma senha")
          passwordIsSet = false
        } else {
          passwordIsSet = true
        }
      }
    }

    function verifyPasswordEquals() {
      if (passwordIsSet === true) {
        if (form.password === form.confirmPassword) {
          passwordConfirm = true
        } else {
          alert("senhas não conferem")
          passwordConfirm = false
        }
      }
    }

    verifyIfUserIsSet()
    verifyIfEmailIsSet()
    verifyIfPasswordIsSet()
    verifyPasswordEquals()

    if (passwordConfirm === true && userNameIsSet === true && emailIsSet === true) {
      axios.post("http://localhost:3001/system/users/", form)
      .then(resp => {
        loginOrSiginChange()
        refreshPage()
        setSignError("")
      })
      .catch((e) => {
        setSignError(e.response.data.error)
      })
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }


  function formChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }


  return (
    <div className="signInFormContainer">
      <form className="signInForm" onSubmit={onSubmitForm}>
        <h2 className="signTitle">Se Cadastre</h2>
        <label htmlFor="signEmail"></label>
        <input
          type="text"
          placeholder="Email"
          id="signEmail"
          name="email"
          onChange={formChange}
        />
        <label htmlFor="userName"></label>
        <input
          type="text"
          placeholder="Nome do Usuário"
          id="userName"
          name="userName"
          onChange={formChange}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="Senha"
          id="password"
          name="password"
          onChange={formChange}
        />
        <label htmlFor="confirmPassword"></label>
        <input
          type="password"
          placeholder="Confirme sua Senha"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formChange}
        />
        <div className="signError">
          {signError}
        </div>
        <button type="submit" >
          Registrar
        </button>
        <div className="goToLogin">
          <span>Ja tem uma conta?</span>
          <span className="goToLoginButton" onClick={() => loginOrSiginChange()}>Entrar</span>
        </div>
        <div className="recaptchaInfo">
          <span> Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</span>
          <a href="https://www.google.com/recaptcha/about/">Saiba mais.</a>
        </div>
      </form>
    </div>
  )
}

export default SignIn
