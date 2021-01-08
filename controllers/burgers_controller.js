var express = require("express");

var router = express.Router();

// Import model to use it's databse functions
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});

// Export routes for server.js to use
module.exports = router;