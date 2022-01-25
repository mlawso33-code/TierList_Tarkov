const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

app.use('/', express.static(__dirname + '/../client/dist'))

const PORT = 3000
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening on ${PORT}`)
})