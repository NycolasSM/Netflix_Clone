import React from 'react'
import './ProfileCard.css'

import EditIcon from '@material-ui/icons/Edit'

import editIcon from './editIcon.png'

const ProfileCard = ({
  img,
  profileName,
  isEditing
}) => {
  return (
    <div className="profileCard" tabIndex="0">
      {isEditing === true ? <div className="editingProfile" style={{ backgroundImage: `url(${editIcon})` }}></div> : ""}
      <img src={img} alt="ProfileImg" />
      <div>{profileName}</div>
    </div>
  )
}

export default ProfileCard
