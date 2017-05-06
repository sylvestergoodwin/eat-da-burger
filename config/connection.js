var connection = require("mysql").createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Inuyasha89",
    database: "burgers_db"
});
connection.connect(function (err) {
    if (err) {
        console.log("Error Connection " + err.stack);
        return;
    }
    console.log("Database Connection Established");
});

module.exports = connection;
