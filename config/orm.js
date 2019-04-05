// Require connection module
var connection = require("../config/connection.js");

// VARIALBE FOR ORM
var orm = {
    // FUNCTIONS
    // SELECT ALL
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    // Select just one
    insertOne: function(table, col_one, col_two, val_one, val_two, cb) {
      var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
      connection.query(queryString, [table, col_one,col_two, val_one, val_two], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
        
      });
    },
 
};







// export orm
module.exports = orm;