
import { Routes , Route } from "react-router-dom"
import TeamsPage from "./pages/TeamsPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import PlayersPage from "./pages/PlayersPage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/teams" element={<TeamsPage />}></Route>

        <Route path='/teams/:id' element={<PlayersPage />}></Route>

        <Route path="*" element={< NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

export default App
