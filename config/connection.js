// Requirements
var mysql = require("mysql");

// Connections for Heroku
var connection;

// Instructions from Jimmy on JawsDB

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 8080,
    password: "password",
    database: "burgers_db"
  });


// establish connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;