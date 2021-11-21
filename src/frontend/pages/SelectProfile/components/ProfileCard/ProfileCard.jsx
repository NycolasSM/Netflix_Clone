import React from 'react'
import './ProfileCard.css'

import EditIcon from '@material-ui/icons/Edit'

import AddProfileIcon from '../../assets/AddProfileIcon.png'
import EditProfileIcon from '../../assets/EditProfileIcon.png'

const ProfileCard = ({
  img,
  profileName,
  isEditing,
  manageOption,
  editProfile,
  selectedProfile
}) => {
  return (
    <div className="profileCard" tabIndex="0">
      {isEditing === true ? <div className="editingProfile" style={{ backgroundImage: `url(${EditProfileIcon})` }} onClick={() => editProfile({profileName, img})} ></div> : ""}
      <img src={img === "createNewProfile" ? AddProfileIcon : img} alt="ProfileImg" onClick={img === "createNewProfile" ? () => manageOption("createProfile") : () => selectedProfile({profileName, img})}/>
      <div>{profileName}</div>
    </div>
  )
}

export default ProfileCard
