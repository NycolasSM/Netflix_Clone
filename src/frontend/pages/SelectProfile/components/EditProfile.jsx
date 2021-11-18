import React, { useState } from 'react'
import './EditProfile.css'

const EditProfile = ({
  profileName,
  profileImg
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
    <section className="editProfile">
      <div className="editProfileContainer">
        <h2 className="editProfileTitle">Editar Perfil</h2>
        <img className="editProfileIcon" src={profileImg === undefined ? defaultIcon : profileImg} alt="ProfileImg" />
        <label htmlFor="ProfileName"></label>
        <input
          className="editProfileName"
          type="text"
          value={profileName}
          placeholder="Nome Do Usuário"
        />
        <button className="editProfileButton">
          Salvar
        </button>
        <button className="editProfileButton">
          Cancelar
        </button>
        <button className="editProfileButton">
          Excluir Perfil
        </button>
      </div>
    </section>
  )
}

export default EditProfile


//db.users.find({_id: ObjectId("618eb6e669a967772623b17b")}).pretty()