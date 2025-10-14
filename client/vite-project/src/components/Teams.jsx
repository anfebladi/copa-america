import axios from "axios"
import { useEffect, useState} from "react"
import { Link } from "react-router-dom"

export default function Teams() {
    const [ countries , setCountries] = useState([])
    const [ loading, setLoading] = useState(false)
    const [ error , setError] = useState(null)

    useEffect(()=> {
        setLoading(true)
        axios.get("/api/teams")
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
                {countries.map(country => (
                    <div className=" mt-5 col-12 col-md-3 d-inline-block text-center  ">
                        <Link className="text-decoration-none" to={`/teams/${country._id}`}>
                            <div key={country._id}>
                                <img src={country.flagUrl}></img>
                                <p className="fs-1 fw-bold text-white">{country.name}</p>
                                
                            </div>
                        </Link>
                    </div>
                ))}
            
        </>
        

    )
}