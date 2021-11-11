import React, { useEffect, useState } from 'react'
import './SelectProfile.css'

import ProfileCard from './components/ProfileCard'

const SelectProfile = () => {
  
  const [showElementAnim, setShowElmentAnim] = useState("")

  useEffect(() => {
    setShowElmentAnim("ShowAnim")

  }, [])

  return (
    <section id="profiles" className="selectProfile">
      <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      </a>
      <div className={`selectProfileContainer ${showElementAnim}`}>
        <div className="selectProfileTitle" >Quem está assistindo?</div>
        <div className="profileCardsList">
          <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" />
          <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" />
          <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" />
          <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" />
          <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" />
        </div>
      </div>
    </section>
  )
}

export default SelectProfile
