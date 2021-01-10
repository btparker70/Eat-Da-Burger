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
    burger.insertOne(["burger_name"], [req.body.burger_name], 
    function(result) {
        console.log(req.body.name);
        res.json({ id: result.insetId})
    })
})

router.put("/api/burgers/:id", function(req, res) {

    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne(["devoured"], [req.body.devoured], req.params.id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})
// Export routes for server.js to use
module.exports = router;