// require modules
var express = require("express");
var path = require("path");
var router = require("./controllers/burgers_controller.js")

var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var handlebars = require("express-handlebars");

// initialize the express app
var app = express();

// set the port that the app will listen to
app.set("port", process.env.PORT || 3000);
//var PORT = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride("_method"))

// set up the app to use bodyParser
//app.use(bodyParser.json);
//app.use(bodyParser.text());
//app.use(bodyParser.json({type: "application/vnd.api+json"}));

// set handlebars as the templating engine
// set the defaul page
// set view engine\
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// set yo the path to the public folder
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./public/assets/img")));
app.use(express.static(path.join(__dirname, "./public/assets/css")));

app.use("/", router);



app.get("/api", function (req, res) {
    console.log("Get /api");
    res.json({
        name: "Food",
        devoured: true
    });
});

// expose the app
module.exports = app;
