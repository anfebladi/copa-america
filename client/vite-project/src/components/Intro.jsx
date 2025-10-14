import { Link } from 'react-router-dom'

export default function Intro () {
    return (
        <div
  className="container-fluid text-white"
  style={{
    backgroundImage:
      'url("https://www.shutterstock.com/image-vector/copa-america-broadcast-template-sports-600nw-2475565373.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  }}
>
  <div className="row h-100 align-items-center justify-content-center mx-5">
    <div className="col-5 d-flex justify-content-center">
      <Link to="/teams" className="display-1 text-start fw-bolder text-decoration-none text-white">
        Build your dream <br></br> team now
      </Link>
    </div>
    <div className="col-5 d-flex justify-content-center">
      <img src="https://i.imgur.com/tYFkSng.png"></img>
    </div>
  </div>
</div>
    )
}