import React, { useEffect, useState } from 'react'
import './ProfilesPage.css'

import SelectProfile from './components/SelectProfile/SelectProfile'
import EditProfile from './components/EditProfile/EditProfile'
import CreateProfile from './components/CreateProfile/CreateProfile'

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
    console.log(`perfil selecionado (${profileName}), link do ícone:${profileImg}`)
  }

  const editProfile = (profileName, profileImg) => {
    const profileInfo = {
      name: profileName,
      img: profileImg
    }
    setProfileSelectedInfoForEdit(profileInfo)
  }

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

export default SelectProfilePage
