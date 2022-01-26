// get the client
const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'mlawso33',
  password: 'password',
  database: 'tierList',
  port: 3306,
  //socketPath: '/var/run/mysqld/mysqld.sock'
});

db.connect((err, result) => {
  console.log('connected')
  if (err) {
    throw err;
  }
});

module.exports = db