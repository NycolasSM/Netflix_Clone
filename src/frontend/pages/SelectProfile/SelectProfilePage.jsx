import React, { useEffect, useState } from 'react'
import './SelectProfilePage.css'

import SelectProfile from './components/SelectProfile/SelectProfile'
import EditProfile from './components/EditProfile/EditProfile'
import CreateProfile from './components/CreateProfile/CreateProfile'

const SelectProfilePage = () => {

  const [manageProfileOption, setManageProfileOption] = useState("createProfile")

  const setManageOption = (option) => {
    setManageProfileOption(option)
  }

  return (
    <section>
      <img className="selectProfileNetflixLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      {
        manageProfileOption === "selectProfile" ? <SelectProfile manageOption={setManageOption} /> :
        manageProfileOption === "editProfile" ? <EditProfile manageOption={setManageOption} /> :
        manageProfileOption === "createProfile" ? <CreateProfile manageOption={setManageOption}/> : ""
      }
    </section>
  )
}

export default SelectProfilePage
