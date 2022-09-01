require('dotenv').config()
let mysql = require('mysql');


let con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD
})

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports = con;