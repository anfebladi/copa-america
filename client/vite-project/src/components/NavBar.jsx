import { Link } from 'react-router-dom'
export default function NavBar() {

    return (

    
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fs-3">
        <Link className="navbar-brand text-white ms-1 ms-md-5" to="/">Copa America 2024</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/teams">Teams</Link>
                </li>
            </ul>
        </div>
    </nav>

    )
}