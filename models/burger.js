// Import the orm to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    // Read/display all
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Add burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Update/devour burger
    updateOne: function(col, val, condition, cb) {
        orm.updateOne("burgers", col, val, condition, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;