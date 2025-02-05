// config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'exo2_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

module.exports = connection;