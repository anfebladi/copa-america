import axios from "axios"
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
export default function Players() {

    const [ countries , setCountries] = useState(null)
    const [ loading, setLoading] = useState(false)
    const [ error , setError] = useState(null)
    const { id } = useParams()

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
            
                <h1>Players</h1>
                    <ul>
                        {countries.players.map( player => (
                            <li key={player._id}>
                                <p> {player.name} </p>
                            </li>
                        ))}
                    </ul>
                    
            
            



        </>
    )
}