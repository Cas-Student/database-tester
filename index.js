var mysql = require('mysql');

var con = mysql.createConnection({
    host: "ep-soft-sunset-a478dq9k.us-east-1.pg.koyeb.app",
    user: "koyeb-adm",
    password: "yQ4Z6bOzjvgP"
})

con.connect(function(err) {
    if (err) throw err;
    document.getElementById("output").innerText = "Connected!";
})