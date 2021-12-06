import React, { useState } from 'react'
import './ProfilesPage.css'

import { SelectProfile, EditProfile, CreateProfile } from './components/profiles'

const SelectProfilePage = () => {

  const [manageProfileOption, setManageProfileOption] = useState("selectProfile")
  const [profileSelectedInfoForEdit, setProfileSelectedInfoForEdit] = useState({
    name: "",
    img: "",
  })

  const setManageOption = (option) => {
    setManageProfileOption(option)
  }

  const profileSelected = (profileName, profileImg) => {
    const profileInfo = {
      name: profileName,
      img: profileImg
    }
    console.log(`perfil selecionado (${profileInfo.name})`)
  }

  const editProfile = (profileName, profileImg) => {
    const profileInfo = {
      name: profileName,
      img: profileImg,
      profileIdForEdit: ""
    }
    setProfileSelectedInfoForEdit(profileInfo)
  }

  console.log(manageProfileOption)

  return (
    <section>
      <div className="selectProfileNetflixLogoHeader">
        <img className="selectProfileNetflixLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      </div>
      {
        manageProfileOption === "selectProfile" ? <SelectProfile profileSelectedInfo={profileSelected} editProfileInfo={editProfile} manageOption={setManageOption} /> :
          manageProfileOption === "editProfile" ? <EditProfile profileName={profileSelectedInfoForEdit.name} profileImg={profileSelectedInfoForEdit.img} manageOption={setManageOption} /> :
            manageProfileOption === "createProfile" ? <CreateProfile manageOption={setManageOption} /> : ""
      }
    </section>
  )
}

// TODO quando o campo manageProfileOption troca deveria chamar o selectProfile porém esta retornando ele vazio

export default SelectProfilePage
