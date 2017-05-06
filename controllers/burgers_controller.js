var burger = require("../models/burgers.js")
var router = require("express").Router();


router.get("/", function (req, res) {
    console.log("Get /");
    burger.getAll(function (data) {
        //format the data
        burgerList = data.filter(function (dataElement) {
            return (dataElement.DEVOURED == 0)
        });
        devouredBurgerList = data.filter(function (dataElement) {
            return (dataElement.DEVOURED == 1)
        });
        res.render("index", {
            burgerList: burgerList,
            devouredBurgerList: devouredBurgerList
        });
    });
});

router.post("/api/add", function (req, res) {
    console.log("ADDED");
    console.log(req.body);

    data = {
        tableName: "burgers",
        insertDataSet: {
            BURGER_NAME: req.body.BURGER_NAME,
            DEVOURED: 0
        }
    };
    burger.add(data, function () {
        console.log("redirection");
        res.redirect("/");
    });
});

router.post("/api/update/:id", function (req, res) {
    console.log("updated");

    console.log(req.body);

    data = {
        tableName: "burgers",
        updateDataSet: {
            BURGER_NAME: req.body.BURGER_NAME,
            DEVOURED: 0,
            ID: req.body.ID
        }
    };
    burger.update(data, function () {
        res.redirect("/");
    });
});

module.exports = router;
