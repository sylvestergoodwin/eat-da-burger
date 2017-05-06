orm = require("../config/orm.js");

var burgers = {
    getAll: function (next) {
        orm.selectAll("burgers", function (data) {
            next(data);
        });
    },
    add: function (data, next) {
        orm.add(data, function () {
            next();
        });
    },
    update: function (data, next) {
        orm.updateOne(data, function () {
            next();
        })
    }
};

module.exports = burgers;
