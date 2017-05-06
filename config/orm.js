var cn = require("./connection.js");

function selectAll(tableName, next) {
    const queryString = "SELECT * FROM BURGERS_DB." + tableName;
    cn.query(queryString, function (err, rows, fields) {
        if (!err)
            next(rows);
        else
            console.log('Error while performing Query.');
    });
}

function add(data, next) {
    const queryString = "INSERT INTO BURGERS_DB." + data.tableName + " SET ?";
    cn.query(queryString, data.insertDataSet, function (err, rows, fields) {
        if (!err)
            next();
        else
            console.log('Error while performing Query.');
    });
}

function updateOne(data) {
    const queryString = "UPDATE BURGERS_DB." + data.tableName + " SET DEVOURED = 1 WHERE ID = " + data.updateDataSet.ID;
    console.log(queryString);
    cn.query(queryString, data.updateDataSet, function (err, rows, fields) {
        if (!err)
            return rows;
        else
            console.log('Error while performing Query.')
    });
}

module.exports = {
    connect: cn,
    selectAll: selectAll,
    add: add,
    updateOne: updateOne
}
