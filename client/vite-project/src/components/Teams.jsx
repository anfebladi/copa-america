import axios from "axios"
import { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import  './Teams.css';


export default function Teams() {
    const [ countries , setCountries] = useState([])
    const [ loading, setLoading] = useState(false)
    const [ error , setError] = useState(null)


    const [search , setSearch] = useState("")

    useEffect(()=> {
        setLoading(true)
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/teams`)
            .then((result)=> {
                setCountries(result.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setError("an error has ocurred")
            })
    }, [])
    
    if(loading) return <p> Loading </p>
    if(error) return <p>Error: {error}</p>
    return (
        <>      
                <div className="row">
                    <div className="col-12 justify-content-center d-flex">

              
                        <input placeholder="Enter countrie's name" className="justify-content-center p-2 pe-5 ps-5 mt-5 mb-5" onChange={(e) => setSearch(e.target.value)}></input>

                    </div>

                </div>
                
                <div className="row">
                {countries.filter(country => search === "" || country.name.toLowerCase().includes(search.toLowerCase())).map(country => (
                    <div className="mt-5 col-12 col-md-3 d-inline-block text-center" key={country._id}>
                        <Link className="text-decoration-none" to={`/teams/${country._id}`}>
                    <div>
                        <img className=" hover-glow .img-fluid. w-75" style={{ width: '100px', height: '220px', objectFit: 'cover' }} src={country.flagUrl} alt={country.name} />
                        <p className="fs-1 fw-bold text-white">{country.name}</p>
                    </div>
                        </Link>
                    </div>
                ))}

                </div>
            
        </>
        

    )
}