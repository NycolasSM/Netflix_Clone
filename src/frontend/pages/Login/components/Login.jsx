import React, { useEffect, useState } from 'react'
import './Login.css'

const Login = () => {

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
        <h2>Login</h2>
        <label htmlFor="signEmail"></label>
        <input
          type="text"
          placeholder="digie o Email"
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
          Registrar
        </button>
      </form>
    </div>
  )
}

export default Login
