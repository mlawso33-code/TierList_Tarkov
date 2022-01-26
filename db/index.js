// get the client
const mysql = require('mysql');

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'tierList',
});

module.exports = {
  db
}