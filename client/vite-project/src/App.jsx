
import { Routes , Route } from "react-router-dom"
import TeamsPage from "./pages/TeamsPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import SoccerPlayer from "./components/SoccerPlayer.jsx"
import Players from "./components/Players.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/teams" element={<TeamsPage />}></Route>

        <Route path='/teams/:id' element={<Players />}></Route>
       
        <Route path="/teams/player" element={<SoccerPlayer />}></Route>
        <Route path="*" element={< NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

export default App
