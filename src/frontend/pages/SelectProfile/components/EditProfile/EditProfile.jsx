import React, { useState } from 'react'
import './EditProfile.css'

import Edit from '@material-ui/icons/Edit'

const EditProfile = ({
  profileName,
  profileImg,
  manageOption
}) => {

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
    <section className="editProfile">
      <div className="editProfileContainer">
        <h2 className="editProfileTitle">Editar Perfil</h2>
        <img className="editProfileIcon" src={profileImg === undefined ? defaultIcon : profileImg} alt="ProfileImg"></img>
        <Edit className="editIcon"/>
        <input
          className="editProfileName"
          type="text"
          defaultValue={profileName}
          placeholder="Nome Do Usuário"
        />
        <hr className="editProfileDivisorLine" />
        <button className="editProfileButtonSave">
          Salvar
        </button>
        <button className="editProfileButtonCancel" onClick={() => manageOption("selectProfile")}>
          Cancelar
        </button>
        <button className="editProfileButtonDelete">
          Excluir Perfil
        </button>
      </div>
    </section>
  )
}

export default EditProfile


//db.users.find({_id: ObjectId("618eb6e669a967772623b17b")}).pretty()