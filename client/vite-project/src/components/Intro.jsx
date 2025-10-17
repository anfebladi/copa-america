import { Link } from 'react-router-dom'

export default function Intro () {
    return (
        
      <div className="row h-100 align-items-center justify-content-center mx-5">
        <div className="col-5 d-flex justify-content-center mt-5">
          <Link to="/teams" className="display-1 text-start fw-bolder text-decoration-none text-white">
            Build your dream <br></br> team now
          </Link>
      </div>
      <div className="col-5 d-flex justify-content-center mt-5">
        <img src="https://i.imgur.com/tYFkSng.png"></img>
      </div>
      </div>

    )
}