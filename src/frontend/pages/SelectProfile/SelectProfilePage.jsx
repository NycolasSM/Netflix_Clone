import React, { useEffect, useState } from 'react'
import './SelectProfilePage.css'

import SelectProfile from './components/SelectProfile'
import EditProfile from './components/EditProfile'

const SelectProfilePage = () => {

  const [editingProfile, setEditingProfile] = useState(true)

  return (
    <section>
      <img className="selectProfileNetflixLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      {editingProfile === true ? <EditProfile /> : <SelectProfile />}
    </section>
  )
}

export default SelectProfilePage
