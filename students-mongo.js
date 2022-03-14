const express = require("express");
const mongoose = require("mongoose");

const application = express();
application.use(express.json());
application.use(express.urlencoded({ extended: true }));

//connect to mongoose
mongoose.connect("mongodb://localhost/college-management").then(() => {
    console.log("Connected to Mongo DB");
})
.catch(err => {
    console.log(err);
})
//this is students schema. How the data should look like in the students collection
const StudentsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: Date
    },
    branch: {
        type: String
    } 
})
//this is students model which connects the table and the schema.
const StudentsModel = mongoose.model('students', StudentsSchema);

application.get("/", function (req, res) {
  res.send({ message: "Welcome to College Management System" });
});

application.get("/students", function (req, res) {
    StudentsModel.find({}, (err, data) => {
        if (err) {
            res.send({ error: true, message: "Unable to fetch the data."});
        } else {
            res.send(data);
        }
    })
});

application.post("/students/create", (req, res) => {
  StudentsModel.create(req.body, (err, data) => {
    if (err) {
        res.send({ error: true, message: "Unable to insert student record."});
    } else {
        res.send(data);
    }
  })
});

application.get("/students/search-by-gender", function (req, res) {
    StudentsModel.find({ gender: req.query.gender }, (err, data) => {
        if (err) {
            res.send({ error: true, message: "Unable to search by gender."});
        } else {
            res.send(data);
        }
    })
});

application.get("/students/search-by-branch/:branch", function (req, res) {
    StudentsModel.find({ branch: req.params.branch }, (err, data) => {
        if (err) {
            res.send({ error: true, message: "Unable to search by branch."});
        } else {
            res.send(data);
        }
    })
});


application.put("/students/update/:id", (req, res) => {
  StudentsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
    if (err) {
        res.send({ error: true, message: "Unable to update student record."});
    } else {
        res.send(data);
    }
  })
});

application.delete('/students/delete/:id', (req, res) => {
    StudentsModel.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.send({ error: true, message: "Unable to delete student record."});
        } else {
            res.send(data);
        }
    })
})

application.listen(8080);
