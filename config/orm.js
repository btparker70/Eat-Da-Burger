// Assets
const { query } = require("express");
const QueryString = require("qs");

// Import MySQL connection
var connection = require("../config/connection.js");

// Object for all the SQL statement functions
var orm = {
    // Read and display
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, table, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    // Add burger
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);"

        console.log(queryString);
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    // Devour burger
    updateOne: function (table, col, val, condition, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;"

        console.log(queryString);
        connection.query(queryString, [table, col, val, condition], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;