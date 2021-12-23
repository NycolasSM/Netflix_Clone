import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SelectProfile.css'

import ProfileCard from '../ProfileCard/ProfileCard'

import { useUserInfo } from '../../../../../providers/userInfo'

const SelectProfile = ({
  manageOption,
  editProfileInfo,
  profileSelectedInfo
}) => {

  const { user } = useUserInfo();

  const [userProfiles, setUserProfiles] = useState([])
  const [isEmptyProfile, setIsEmptyProfile] = useState(false)
  const [isLogged, setIsLogged] = useState(true)


  const [isSelectingProfileForEdit, setIsSelectingProfileForEdit] = useState(false)

  const getProfilesByUserId = (userId) => {
    axios.get(`http://localhost:3001/system/user/${userId}`)

      .then(resp => {
        setUserProfiles(resp.data.profiles)
        if (resp.data.profiles.length === 0) {
          setIsEmptyProfile(false)
        }
      })
      .catch(err => {
        console.log(err)
      })
      
  }

  useEffect(() => {

    const isUserAuthenticated = user.id !== ""

    if (isUserAuthenticated) {
      getProfilesByUserId(user.id)

    } else {

      setIsLogged(false)
    }
  }, [user.id])

  const setManageOption = (option) => {
    manageOption(option)
  }

  const selectedProfile = (profileSelected) => {
    profileSelectedInfo(profileSelected.profileName, profileSelected.img)
  }

  const editProfile = (profileSelected) => {
    editProfileInfo(profileSelected.profileName, profileSelected.img)
    manageOption("editProfile")
  }

  // Manage profile buttom
  const DontHaveProfiles = <div className="manageProfiles" onClick={() => setIsSelectingProfileForEdit(true)}>Criar Primeiro Usário</div>
  const manageButtomOff = <div className="manageProfiles" onClick={() => setIsSelectingProfileForEdit(true)}>Gerenciar Perfis</div>
  const manageButtomOn = <div className="manageProfiles" style={{ backgroundColor: "white", color: "black" }} onClick={() => setIsSelectingProfileForEdit(false)}>Concluído</div>

  // if user is not logged
  const isNotLogged = <div className="isNotLogged" style={{ fontSize: "2em", color: "white" }}>Voce Não está Logado</div>

  return (
    <section id="profiles" className="selectProfile">

      {/* verify if user is Logged */}
      {isLogged === false ? isNotLogged

        :

        <div className="selectProfileContainer">
          <div className="profileCardsListContainer">
            <div className="selectProfileTitle" >{isSelectingProfileForEdit === true ? "Qual perfil deseja editar?" : "Quem esta assistindo?"}</div>
            <div className="profileCardsList">
              {userProfiles.map((item, key) => (
                <ProfileCard key={key} profileName={item.name} img={item.img} profileId={item._id} isEditing={isSelectingProfileForEdit} manageOption={setManageOption} selectedProfile={selectedProfile} editProfile={editProfile} />
              ))}
              {userProfiles.length < 5 ? <ProfileCard profileName={"Criar Novo Usuario"} img={"createNewProfile"} manageOption={setManageOption} /> : ""}
            </div>
            {userProfiles.length === 0 ? DontHaveProfiles : isSelectingProfileForEdit === true ? manageButtomOn : manageButtomOff}
          </div>
        </div>

      }

      {/* loading */}
      {isEmptyProfile === true ?
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
        : ""
      }

    </section>

  )
}

export default SelectProfile
