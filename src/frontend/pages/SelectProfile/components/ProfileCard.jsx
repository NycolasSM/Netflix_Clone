import React from 'react'
import './ProfileCard.css'

const ProfileCard = ({
  img,
  profileName
}) => {
  return (
    <div className="profileCard">
      <img src={img} alt="ProfileImg" />
      <div>{profileName}</div>
    </div>
  )
}

export default ProfileCard
