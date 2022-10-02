// get the client
const mysql = require('mysql2');
require('dotenv').config({path: `../.env`});

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: 3306,
});

db.connect((err, result) => {
  console.log('connected')
  if (err) {
    throw err;
  }
});

module.exports = db