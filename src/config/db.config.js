// Express
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'nodejs_api_rest',
    user: 'root',
    password: 'root'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err;
    console.log('Database connection successful!');
});

module.exports = connection;