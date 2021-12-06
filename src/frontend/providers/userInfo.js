import React, { useState } from "react";

export const UserInfoContext = React.createContext({});

export const UserInfoProvider = (props) => {
  const [user, setUser] = useState({
    id: JSON.parse(localStorage.getItem("user")).userInfoID,
    token: JSON.parse(localStorage.getItem("user")).userInfoToken,
    profileIdForEdit: JSON.parse(localStorage.getItem("user")).profileIdForEdit
  });

  // id: JSON.parse(localStorage.getItem("user")).userInfoID || 123 ,

  return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => React.useContext(UserInfoContext);


// TODO fazer o teste de utilizar diferentes valores no mesmo provider
// exemplo: 
// separar o profileIdForEdit em outro useState
// usar dois componentes
// um usa os dados do user e o outro usa os dados do profileIdForEdit
//  
// testar:
// ao atualizar o estado de um state e verificar se ambos componentes reenderizam