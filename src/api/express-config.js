const express = require("express");
const application = express();
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.listen(8080);

application.get("/", function (req, res) {
    res.send({ message: "Welcome to College Management System" });
});

module.exports = {
    application
}