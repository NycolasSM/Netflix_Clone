import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SignIn.css'

const SignIn = () => {


  const [form, setForm] = useState({
    email: "",
    userName: "",
    password: "",
    favoriteItens: []
  })

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/system/users/')
      .then(resp => {
        setUsers(resp.data)
      })
  }, [])

  function onSubmitForm(event) {
    event.preventDefault();


    let passwordConfirm = false
    let userNameIsSet = false
    let emailIsSet = false
    let emailIsValid = true
    let passwordIsSet = false

    function verifyEmail() {
      users.forEach(function (user) {
        if (user.email === form.email) {
          alert('email ja cadastrado')
          emailIsValid = false
        }
      })
    }

    function verifyIfUserIsSet() {
      if (emailIsSet === true) {
        if (form.name === "") {
          alert("precisa inserir um nome")
          userNameIsSet = false
        } else {
          userNameIsSet = true
        }
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

    verifyEmail()
    verifyIfUserIsSet()
    verifyIfEmailIsSet()
    verifyIfPasswordIsSet()
    verifyPasswordEquals()

    if (passwordConfirm === true && userNameIsSet === true && emailIsSet === true && emailIsValid === true) {
      axios.post("http://localhost:3001/system/users/", form)
        .then(() => window.location.reload())
        .catch(err => {
          console.log(err)
        })
    }
  }


  function formChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }


  return (
    <div className="signInFormContainer">
      <form className="signInForm" onSubmit={onSubmitForm}>
        <h2>Se Cadastre</h2>
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
          type="text"
          placeholder="Senha"
          id="password"
          name="password"
          onChange={formChange}
        />
        <label htmlFor="confirmPassword"></label>
        <input
          type="text"
          placeholder="Confirme sua Senha"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formChange}
        />
        <button type="submit" >
          Registrar
        </button>
      </form>
    </div>
  )
}

export default SignIn
