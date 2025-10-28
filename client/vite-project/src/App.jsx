
import { Routes , Route, Navigate } from "react-router-dom"
import TeamsPage from "./pages/TeamsPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import PlayersPage from "./pages/PlayersPage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.js";
import { useState , useEffect } from "react"


function App() {
  

  const[user, setUser] = useState(null);

  useEffect(() => {
    const logOut = onAuthStateChanged(auth , (currentUser)=> {
      setUser(currentUser)
    })
    return logOut;
  },[])


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/teams" element={user ? <TeamsPage /> : <Navigate to="/"/>}></Route>

        <Route path='/teams/:id' element={user ? <PlayersPage /> : <Navigate to="/" />}></Route>

        <Route path="*" element={< NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

export default App
