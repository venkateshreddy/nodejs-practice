const { mongoose } = require("../mongoose-config")

//this is students schema. How the data should look like in the students collection
const StudentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: () => {
            //here the validation code should written
            //return false
        }, 
        unique: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Others"]
    },
    dob: {
        type: Date,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    about: {
        type: String
    } 
}, {
    timestamps: true   
})
//this is students model which connects the table and the schema.
const StudentsModel = mongoose.model('students', StudentsSchema);

module.exports = {
    StudentsModel
};