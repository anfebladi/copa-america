import express from "express"
const app = express()
import mongoose from "mongoose"
import Country  from "./models/Country.js"
import cors from "cors"
import dotenv from "dotenv"

app.use(express.json())
app.use(cors())
dotenv.config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(()=> {
        console.log("Server is running on port 5000");
        app.listen(5000)
        console.log("server is running")
    })
    .catch((err)=> {
        console.log(err)
    })

app.get("/api/teams",  (req,res)=> {
    Country.find()
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(500).json({error:'there was an error'})
        })
})


app.get("/api/teams/:TeamId", (req,res)=> {
    const TeamId = req.params.TeamId.trim()
    Country.findById(TeamId)
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
        })
})



