const mysql = require("mysql");

var connectdb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pihu1803",
    database: "dbms"
  });

connectdb.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected");
  });

  module.exports = connectdb;