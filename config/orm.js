const { query } = require("express");
// Import MySQL connection
var connection = require("../config/connection.js");

// Object for all the SQL statement functions
var orm = {
    all: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
    // insertOne: function(table, column, value, cb) {
    //     var queryString = "INSERT INTO " + table + 
    // }
}

module.exports = orm;