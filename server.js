// Dependencies
var express = require("express");
// var bodyParser = require("body-parser");
require('dotenv').config();

// Port
var PORT = process.env.PORT || 3000;

// Node server
var app = express();

// Server static content for the app from the "public" directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

// Set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give server access to them
var routes = require("./controllers/burgers_controller.js")

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
})