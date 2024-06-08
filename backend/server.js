const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
const workoutroutes = require('./routes/workoutroutes')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

app.use((req , res , next) => {
    console.log(req.method)
    console.log(req.path)
    console.log(req.url)
    next()
})

app.use('/api-workouts' , workoutroutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT , ()=>{ 
        console.log('port 5000 being listened')
    })
})
.catch((err) => {
    console.log(err)
})