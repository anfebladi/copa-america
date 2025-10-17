import NavBar from "../components/NavBar.jsx"
import Intro from "../components/Intro.jsx"

export default function HomePage() {

    return (
        <div>

            <NavBar />
            <div
                className="container-fluid text-white"
                style={{
                backgroundImage:
                'url("https://www.shutterstock.com/image-vector/copa-america-broadcast-template-sports-600nw-2475565373.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                }}
            >
                < Intro />
            </div>
            
        </div>

    )
    
    
}