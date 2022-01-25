const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())



const PORT = 3000
app.listen((err) => {
  err ? console.log(err) : console.log(`Listening on ${PORT}`)
})