app = require("./app.js");

    // invoke the listener
    app.listen(app.get("port"), function () {
        console.log("Express Application node-basic-portfolio started on " + app.get("port") + " press ctrl-C to terminate");
    })
