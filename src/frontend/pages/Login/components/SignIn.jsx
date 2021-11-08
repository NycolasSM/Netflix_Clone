import React, { useState, useEffect } from 'react'
import './SignIn.css'

const SignIn = () => {


  const [form, setForm] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    favoriteItens: []
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
    <div className="signInFormContainer">
      <form className="signInForm">
        <h2>Se Cadastre</h2>
        <label htmlFor="signEmail"></label>
        <input
          type="text"
          placeholder="digie o Email"
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
