var express = require("express");

var router = express.Router();

// Import model to use it's databse functions
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});

router.post("/api/burgers", function(req, res) {
    console.log("router post")
    burger.insertOne(["burger_name"], [req.body.burger_name], 
    function(result) {
        console.log(req.body.name);
        res.json({ id: result.insetId})
    })
})
// Export routes for server.js to use
module.exports = router;