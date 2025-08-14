const db = require('./database.js');

const user = { 
    name: 'Ravi Kumar', email: 'ravi@example.com',
    name: 'Rajesh', email: 'rajesh@example.com'
 };

const sql = 'INSERT INTO test SET ?';

db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log('Data inserted, ID:', result.insertId);
});