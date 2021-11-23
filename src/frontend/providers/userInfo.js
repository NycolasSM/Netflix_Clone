import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserInfoContext = React.createContext({});

export const UserInfoProvider = (props) => {
  const [user, setUser] = useState({
    name: "",
    img: "",
    profiles: []
  });


  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    let userTestInfos = {
      name: "Testando",
      img: "https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABe4WkXdu3oC4z4hy3uN6hIV8g83LOqKwf_T3ySwcbofmhfdXc5rus-WXwCUJwi0pFSE-hl4RK7_XxoZqBSIYdRcXtSYl.png?r=1dd",
      profiles: [

      ]
    }

    // axios.get("http://localhost:3001/system/user/618eb6e669a967772623b17b")
    //   .catch(err => {
    //     console.log(err)
    //   })
    //   .then(resp => {
    //     console.log(resp.data)
    //     userTestInfos.profiles = resp.data.profiles
    //     localStorage.setItem("user", JSON.stringify(userTestInfos))
    //     console.log(userTestInfos)
    //   })


    if (userStorage) {
      setUser(JSON.parse(userStorage));
      // localStorage.removeItem("user")
    } else {
      // localStorage.setItem("user", JSON.stringify(userTestInfos))
      // setUser({
      //   profiles: []
      // });
    }
  }, []);

  return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => React.useContext(UserInfoContext);