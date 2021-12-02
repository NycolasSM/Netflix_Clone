import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Login from './Login/LoginAndSignInForm'
import SelectProfile from './SelectProfile/ProfilesPage'
import MoviesPage from './Movies/MoviesPage.jsx'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/selectProfile" element={<SelectProfile />} />
        <Route path="/moviesList" element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

// import { Link } from 'react-router-dom'
{/* <Link className="link" to={`/product/${id}`}> */ }

export default App








// (versao Antiga sem router)

// import React, { useState } from 'react'

// import Login from './Login/LoginAndSignInForm'
// import SelectProfile from './SelectProfile/ProfilesPage'
// import MoviesPage from './Movies/MoviesPage.jsx'

// const App = () => {

//   const [managePage, setManagePage] = useState("Login")


//   const changePage = (option) => {
//     setManagePage(option)
//   }

//   return (
//     <>
//       {
//         managePage === "Login" ? <Login changePage={changePage} /> :
//           managePage === "SelectProfile" ? <SelectProfile handleChangePage={changePage} /> :
//             managePage === "MoviesPage" ? <MoviesPage handleChangePage={changePage} /> : ""
//       }
//     </>
//   )
// }

// export default App
