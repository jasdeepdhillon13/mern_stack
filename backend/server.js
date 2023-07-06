require('dotenv').config()

const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors'); 

const app = express()

app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next() 
})

//routes
app.use('/api/workouts',workoutRoutes); 

//connect to do 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
app.listen(process.env.PORT, ()=> {
    console.log('listening on port', process.env.PORT)
})

})
.catch((error) => {
    console.log(process.env.MONGO_URI); 
    console.log(error); 
})

