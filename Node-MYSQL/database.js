const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'node' 
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection Error', err.stack);
        return;
    }
    console.log('Connected to MySQL database Successsfully');
});

module.exports = connection;