import { Link } from 'react-router-dom'
import  './Intro.css';


export default function Intro() {


  return (
    <div className="row h-100 align-items-center justify-content-center mx-5">
        <div className="col-5 d-flex justify-content-center mt-5">
          <Link to="/teams" className=" hover-glow display-1 text-start fw-bolder text-decoration-none text-white mt-5">
            Build your dream <br></br> team now
          </Link>
      </div>
      <div className="col-5 d-flex justify-content-center mt-5 ">
        <img className="mt-5 hover-glow" src="https://i.imgur.com/tYFkSng.png"></img>
      </div>
    </div>
  );
}

