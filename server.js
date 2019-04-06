// Setting Requirements
var express = require("express");
var mysql = require("mysql");
var path = require("path");
var exphbs = require("express-handlebars");


var app = express();

var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Ensures the app is connected
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);

});