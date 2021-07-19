const mysql = require("mysql")
console.log("7777")
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'data567',
    database:'bajaj'
})

dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database Connected Successfullyy")

})

module.exports = dbConn;