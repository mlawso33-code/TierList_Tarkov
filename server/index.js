const express = require('express')
const axios = require('axios')
const db = require('../db/index.js')
const app = express()

app.use(express.json())

app.use('/', express.static(__dirname + '/../client/dist'))

app.get('/tierlist/assault_rifles', (req, res) => {
  db.query('SELECT * FROM assault_rifles', (err, result) => {
    err ? console.log(err) : res.send(result)
  })
})

const PORT = 3000
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening on ${PORT}`)
})