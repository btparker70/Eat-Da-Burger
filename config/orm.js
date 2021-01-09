const { query } = require("express");
const QueryString = require("qs");
// Import MySQL connection
var connection = require("../config/connection.js");

// function printQuestionMarks(num) {
//     var arr = [];
  
//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }

// Object for all the SQL statement functions
var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, table, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);"

        console.log(queryString);
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;

            cb(result);
        })
    }
    // updateOne():

    
}

module.exports = orm;