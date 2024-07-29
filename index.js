const express = require('express')
const phonesJSON = require('./phones.json')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT ?? 1234

app.use(cors())

app.get('/', (req,res)=>{
    res.status(200).json(phonesJSON)
})

app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`)
})