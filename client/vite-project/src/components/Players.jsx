import axios from "axios"
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import  './Players.css';

export default function Players() {

    const [ countries , setCountries] = useState(null)
    const [ loading, setLoading] = useState(false)
    const [ error , setError] = useState(null)
    const { id } = useParams()
    const[search , setSearch] = useState("")

    useEffect(()=> {
        setLoading(true)
        axios.get(`/api/teams/${id}`)
            .then((result)=> {
                setCountries(result.data)
                setLoading(false)
            })
            .catch((err)=> {
                setLoading(false)
                setError(err)
            })
    }, [id])

    if (loading) return <p> Loading... </p>
    if (error ) return <p> Error {error}</p>
    if (!countries) return <p>No team data found.</p>;

    return (
        <> 
             
                 
                
                    <div className="row">
                        <h1 className="text-center mt-5 mb-5 display-3 fw-bold"> Copa America 2024 Squad: </h1>
                    </div>
                    <div className="row">
                        <div className="col-12 justify-content-center d-flex">
                            <input placeholder="Enter player's name"  onChange={(e)=> setSearch(e.target.value)}className="p-2 pe-5 ps-5 mt-3 mb-3"></input>
                        </div>
                    </div>

                    <div className="row justify-content-center d-flex">

                        {countries.players.filter(player => search === '' || player.name.toLowerCase().includes(search.toLowerCase())).map( player => (
                            <div className="col-3 ms-5 me-5 bg-white mt-5 mb-5  rounded hover-zoom">
                                <div className="bg-info m-3">
                                    <p className="text-dark text-center fs-1 fw-bold mb-4"> {player.name} </p>
                                    
                                    <p className="text-dark text-center fs-3 fw-bold"> Position:</p>
                                    <p className="text-dark text-center fs-1 fw-bold mb-3">{player.position}</p>
                                    
                                </div>
                            </div>
                            
                        ))}

                    </div>
                    
                        
                    
                    
            
            



        </>
    )
}