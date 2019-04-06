// Setting Requirements
var express = require("express");
var mysql = require("mysql");


var PORT = process.env.PORT || 3000;
var app = express();


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Ensures the app is connected
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);

});