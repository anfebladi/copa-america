import axios from "axios"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

export default function SoccerPlayer() {
    const [ player , setPlayer] = useState(null)
    const [ loading, setLoading] = useState(false)
    const [ error , setError] = useState(null)
    const {id} = useParams()

    useEffect(()=> {
        setLoading(true)
        axios.get(`/api/teams/${id}`)
            .then((result)=> {
                setLoading(false)
                setPlayer(result.data)
            })
            .catch((err)=> {
                setLoading(false)
                setError(err)
            })
        }, [id])

        if (loading) return <p> ...Loading </p>
        if (error) return <p> an error has ocurred {error}</p>
        if (!player) return <p> player does not exist </p>
    return (
        <>
            {countries.players.map( player => (
                <div>
                    <h1>{player.name}</h1>
                    <h2>{player.goals}</h2>
                </div>
                
            ))}

        </>
    )
}