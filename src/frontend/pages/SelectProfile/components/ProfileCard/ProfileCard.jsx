import React from 'react'
import './ProfileCard.css'

import EditIcon from '@material-ui/icons/Edit'

import editIcon from '../editIcon.png'

const ProfileCard = ({
  img,
  profileName,
  isEditing,
  manageOption
}) => {
  return (
    <div className="profileCard" tabIndex="0">
      {isEditing === true ? <div className="editingProfile" style={{ backgroundImage: `url(${editIcon})` }}></div> : ""}
      <img src={img} alt="ProfileImg" onClick={() => manageOption("editProfile")}/>
      <div>{profileName}</div>
    </div>
  )
}

export default ProfileCard
