require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const port = 3000

app.get('/', (req, res)=>{
    res.status(200).send('Welcome to our Server')
})

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Server is up and running in ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}

start()


