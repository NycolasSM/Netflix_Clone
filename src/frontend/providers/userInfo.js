import React, { useEffect, useState } from "react";

export const UserInfoContext = React.createContext({});

export const UserInfoProvider = (props) => {
  const [user, setUser] = useState({
    name: "",
    img: "",
    profiles: []
  });


  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    const userTestInfos = {
      name: "Nycolas",
      img: "https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABe4WkXdu3oC4z4hy3uN6hIV8g83LOqKwf_T3ySwcbofmhfdXc5rus-WXwCUJwi0pFSE-hl4RK7_XxoZqBSIYdRcXtSYl.png?r=1dd",
      profiles: [
        {
          id: 1,
          name: "Milton",
          img: "https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVQP3mg6mW-rHZZC-vITevY2ILgks0js3MPS78GXvi7a-4WIftkXzZihbjq2NXcvmf6pejIUCsLGOnOGORhZbCjTSoiO.png?r=8d1"
        },
        {
          id: 2,
          name: "Nycolas",
          img: "https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABe4WkXdu3oC4z4hy3uN6hIV8g83LOqKwf_T3ySwcbofmhfdXc5rus-WXwCUJwi0pFSE-hl4RK7_XxoZqBSIYdRcXtSYl.png?r=1dd"
        },
        {
          id: 3,
          name: "Teste",
          img: "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        }
      ]
    }

    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      // localStorage.setItem("user", JSON.stringify(userTestInfos)) para sertar uma valor no localStorage afims de teste
      setUser({
        profiles: [ ]
      });
    }
  }, []);

  return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => React.useContext(UserInfoContext);