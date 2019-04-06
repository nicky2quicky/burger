// Setting up Requirements and Express
var express = require('express');
var path = require('path');
var router = express.Router();
var burger = require('../models/burger.js');

// Paths for Selecting All Burgers
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbObject = {
            burgers : data
};

        res.render("index", hbObject);
    });
});

// Path for inserting a new Burger
router.post("/api/burgers", function(req, res) {
    console.log("request.body", req.body);

    burger.insertBurger(req.body.burger_name, false, function(result){
        console.log('result :: ', result);
        res.json({ id: result.insertId });
    });
});

// Path for updating the burger 
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id + ';';
  
    console.log("condition", condition);
  
    burger.updateBurger('devoured = true', condition, function(result) {
      if (result.changedRows == 0) {
        // if no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// exporting router.
module.exports = router;
