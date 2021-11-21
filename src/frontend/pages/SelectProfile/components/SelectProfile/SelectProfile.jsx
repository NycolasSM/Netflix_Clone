import React, { useEffect, useState } from 'react'
import './SelectProfile.css'

import ProfileCard from '../ProfileCard/ProfileCard'

import { useUserInfo } from '../../../../providers/userInfo'

const SelectProfile = ({
  manageOption,
  editProfileInfo,
  profileSelectedInfo
}) => {

  const { user, setUser } = useUserInfo();

  const [showElementAnim, setShowElmentAnim] = useState("")
  const [isSelectingProfileForEdit, setIsSelectingProfileForEdit] = useState(false)

  useEffect(() => {
    setShowElmentAnim("ShowAnim")
  }, [])

  const setManageOption = (option) => {
    manageOption(option)
  }

  const selectedProfile = (profileSelected) => {
    profileSelectedInfo(profileSelected.profileName, profileSelected.img)
  }

  const editProfile = (profileSelected) => {
    editProfileInfo(profileSelected.profileName, profileSelected.img)
    manageOption("editProfile")
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
            {user.profiles.map((item, key) => (
              <ProfileCard key={key} profileName={item.name} img={item.img} isEditing={isSelectingProfileForEdit} manageOption={setManageOption} selectedProfile={selectedProfile} editProfile={editProfile}/>
            ))}
            {user.profiles.length < 5 ? <ProfileCard profileName={"Criar Novo Usuario"} img={"createNewProfile"} manageOption={setManageOption} /> : "" }
          </div>
          {user.profiles.length === 0 ? DontHaveProfiles : isSelectingProfileForEdit === true ? manageButtomOn : manageButtomOff}
        </div>
      </div>
    </section>

  )
}

export default SelectProfile
