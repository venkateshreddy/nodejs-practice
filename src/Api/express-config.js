const express = require('express');
const application = express();


application.use(express.json());
application.use(express.urlencoded({ extended: true }));

application.listen(3030);

application.get('/', function (req, res) {
    res.send({ message: "welocome to Student management System" })
  })
  

module.exports ={
    application
}