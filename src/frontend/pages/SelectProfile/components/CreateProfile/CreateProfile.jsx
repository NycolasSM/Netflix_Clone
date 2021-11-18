import React, { useState } from 'react'
import './CreateProfile.css'

import Edit from '@material-ui/icons/Edit'

const CreateProfile = ({
  profileName,
  profileImg,
  manageOption
}) => {

  console.log(profileImg)

  const [form, setForm] = useState({
    name: "",
    img: ""
  })

  function onSubmitForm(event) {
    event.preventDefault();
  }

  function formChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }

  const defaultIcon = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"

  return (
    <section className="createProfile">
      <div className="createProfileContainer">
        <h2 className="createProfileTitle">Criar Perfil</h2>
        <img className="createProfileIcon" src={profileImg === undefined ? defaultIcon : profileImg} alt="ProfileImg"></img>
        <Edit className="createIcon"/>
        <input
          className="createProfileName"
          type="text"
          value={profileName}
          placeholder="Nome Do Usuário"
        />
        <hr className="createProfileDivisorLine" />
        <button className="createProfileButtonSave">
          Salvar
        </button>
        <button className="createProfileButtonCancel" onClick={() => manageOption("selectProfile")}>
          Cancelar
        </button>
      </div>
    </section>
  )
}

export default CreateProfile


//db.users.find({_id: ObjectId("618eb6e669a967772623b17b")}).pretty()