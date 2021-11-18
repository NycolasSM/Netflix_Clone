import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SelectProfile.css'

import ProfileCard from '../ProfileCard/ProfileCard'

const SelectProfile = ({
  manageOption
}) => {
  const [showElementAnim, setShowElmentAnim] = useState("")
  const [isSelectingProfileForEdit, setIsSelectingProfileForEdit] = useState(false)
  const [user, setUser] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3001/system/users/618eb6e669a967772623b17b")
      .then(resp => setUser(resp.data.profiles))
  }, [])


  useEffect(() => {
    setShowElmentAnim("ShowAnim")

  }, [])

  const setManageOption = (option) => {
    manageOption(option)
  }


  // Manage profile buttom
  const DontHaveProfiles = <div className="manageProfiles" onClick={() => setIsSelectingProfileForEdit(true)}>Criar Primeiro Usário</div>
  const manageButtomOff = <div className="manageProfiles" onClick={() => setIsSelectingProfileForEdit(true)}>Gerenciar Perfis</div>
  const manageButtomOn = <div className="manageProfiles" style={{ backgroundColor: "white", color: "black" }} onClick={() => setIsSelectingProfileForEdit(false)}>Concluído</div>

  return (
    <section id="profiles" className="selectProfile">
      <div className={`selectProfileContainer ${showElementAnim}`}>
        <div className="profileCardsListContainer">
          <div className="selectProfileTitle" >{isSelectingProfileForEdit === true ? "Qual perfil deseja editar?" : "Quem esta assistindo?"}</div>
          <div className="profileCardsList">
            {user.map((item, key) => (
              <ProfileCard key={key} profileName={item.name} img={item.img} isEditing={isSelectingProfileForEdit} manageOption={setManageOption}/>
            ))}
          </div>
          {user.length === 0 ? DontHaveProfiles : isSelectingProfileForEdit === true ? manageButtomOn : manageButtomOff}
        </div>
      </div>
    </section>

  )
}

export default SelectProfile
