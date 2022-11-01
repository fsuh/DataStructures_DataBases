const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root@123',
    database: 'testdbnew',
});

connection.connect();

connection.query('SELECT * FROM task', (error, results, fields) => {
    if(error){
        return console.log(error);
    }
    return console.log(results);
});

connection.end();