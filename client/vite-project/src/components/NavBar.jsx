import { Link } from 'react-router-dom'
import { signOut, signInWithPopup } from "firebase/auth";
import { auth, google } from "../config/firebase.js";
export default function NavBar() {

    const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch(err) {
      console.log(err)
    }
  }


  const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, google)
      } catch(err) {
        console.log(err)
      }
    }

    return (

    
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fs-3">
        <Link className="navbar-brand text-white ms-1 ms-md-5" to="/">Copa America 2024</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/teams">Teams</Link>
                </li>
                
            </ul>
            <ul className="navbar-nav mr-auto ms-auto me-5">
                 <li className="nav-item me-3">
                    <Link className="nav-link text-white" onClick={signInWithGoogle} >Sign In</Link>
                 </li>
                 <li className="nav-item me-3">
                    <Link className="nav-link text-white" onClick={handleSignOut} >Sign Out</Link>
                 </li>



                 
            </ul>
        </div>
    </nav>

    )
}