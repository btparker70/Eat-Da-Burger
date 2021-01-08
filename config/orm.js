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
    all: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSET INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals.toString();
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    }
    
    // insertOne: function(table, column, value, cb) {
    //     var queryString = "INSERT INTO " + table + 
    
}

module.exports = orm;