var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    insertBurger: function(val_one, val_two, cb){
        orm.insertBurger('burgers', 'burger_name', 'eaten', val_one, val_two, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateBurger('burgers', objColVals, condition, function(res){
            cb(res);
        });
    },
}

module.exports = burger;