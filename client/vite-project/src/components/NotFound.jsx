import { Link } from "react-router-dom"
export default function NotFound() {

    return (
        <>
            <div
                className="container-fluid text-white"
                style={{
                    backgroundImage: 'url("https://www.shutterstock.com/image-vector/copa-america-broadcast-template-sports-600nw-2475565373.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}
            >
                <div className="row text-center ">
                    <h1 className="mt-5 display-4 fw-bolder"> 404 </h1>
                </div>
                <div className="row text-center">
                    <h2 className="mt-5 display-4 fw-bold"> The page you were trying to reach is not accesible <br></br> please try returning to our home <Link to="/"> Page </Link> </h2>
                </div>
                <div className="row justify-content-center">
                    <img className="img-fluid w-25" src="https://i.imgur.com/BMVV0jS.png"></img>
                </div>


            </div>
        </>
    )
}