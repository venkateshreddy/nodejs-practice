const { StudentsModel } = require("./model");

module.exports = {
    getAllStudents: (req, res) => {
        StudentsModel.find({}, (error, data) => {
            if (error) {
                res.send({ error: true, type: error.name, message: error.message });
            } else {
                res.send(data);
            }
        })
    },
    createStudent: (req, res) => {
        StudentsModel.create(req.body, (error, data) => {
          if (error) {
              res.send({ error: true, type: error.name, message: error.message });
          } else {
              res.send(data);
          }
        })
    },
    searchByGender: (req, res) => {
        StudentsModel.find({ gender: req.query.gender }, (error, data) => {
            if (error) {
                res.send({ error: true, type: error.name, message: error.message });
            } else {
                res.send(data);
            }
        })
    },
    searchByBranch: (req, res) => {
        StudentsModel.find({ branch: req.params.branch }, (error, data) => {
            if (error) {
                res.send({ error: true, type: error.name, message: error.message });
            } else {
                res.send(data);
            }
        })
    },
    updateStudent: (req, res) => {
        StudentsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => {
          if (error) {
              res.send({ error: true, type: error.name, message: error.message });
          } else {
              res.send(data);
          }
        })
    },
    deleteStudent: (req, res) => {
        StudentsModel.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                res.send({ error: true, type: error.name, message: error.message });
            } else {
                res.send(data);
            }
        })
    }
}