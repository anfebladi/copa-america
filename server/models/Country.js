import mongoose from "mongoose"
const { Schema } = mongoose

const playerSchema = new Schema( {
    name: {
        type: String
    },
    position: {
        type: String
    },
    age: {
        type: Number
    },
    goals: {
        type: Number
    },
    assist: {
        type: Number
    }

})

const countrySchema = new Schema( {
    name: {
        type: String
    }, 
    flagUrl: {
        type: String
    },
    players: [playerSchema]
    
})

const Country = mongoose.model("Country", countrySchema, "Country")
export default Country