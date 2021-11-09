import React from 'react'
import './Header.css'

const Header = ({
  black
}) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="headerLogo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
        </a>
      </div>
      <div className="headerUser">
        <a href="/">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
        </a>
      </div>
    </header>
  )
}

export default Header
