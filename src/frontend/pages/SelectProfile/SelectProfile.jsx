import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SelectProfile.css'

import ProfileCard from './components/ProfileCard'

const SelectProfile = () => {

  const [showElementAnim, setShowElmentAnim] = useState("")
  const [isSelectingProfileForEdit, setIsSelectingProfileForEdit] = useState(false)
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [user, setUser] = useState([])

  useEffect(() => {
    setShowElmentAnim("ShowAnim")

  }, [])

  useEffect(() => {
    axios.get("http://localhost:3001/system/users/618eb6e669a967772623b17b")
      .then(resp => setUser(resp.data))
      .then(console.log(user))
      .then(console.log(user))
  }, [])


  const ifDontHaveProfile = <div className="manageProfiles" onClick={() => setIsSelectingProfileForEdit(true)}>Criar Primeiro Usário</div>
  const manageButtomOn = <div className="manageProfiles" style={{ backgroundColor: "white", color: "black" }} onClick={() => setIsSelectingProfileForEdit(false)}>Concluído</div>
  const manageButtomOff = <div className="manageProfiles" onClick={() => setIsSelectingProfileForEdit(true)}>Gerenciar Perfis</div>


  const selectProfilePage =
    <section id="profiles" className="selectProfile">
      <a href="/" tabIndex="0">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      </a>
      <div className={`selectProfileContainer ${showElementAnim}`}>
        <div className="profileCardsListContainer">
          <div className="selectProfileTitle" >{isSelectingProfileForEdit === true ? "Qual perfil deseja editar?" : "Quem esta assistindo?"}</div>
          <div className="profileCardsList">
            <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" isEditing={isSelectingProfileForEdit} />
            <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" isEditing={isSelectingProfileForEdit} />
            <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" isEditing={isSelectingProfileForEdit} />
            <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" isEditing={isSelectingProfileForEdit} />
            <ProfileCard img="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" profileName="Teste" isEditing={isSelectingProfileForEdit} />
          </div>
          {isSelectingProfileForEdit === true ? manageButtomOn : manageButtomOff}
        </div>
      </div>
    </section>

  const editingProfilePage =
    <div>teste</div>

  return (
    <div>
      {isEditingProfile === true ? editingProfilePage : selectProfilePage}
    </div>
  )
}

export default SelectProfile
