const mongoose = require("mongoose");

//connect to mongoose
mongoose.connect("mongodb://localhost/college-management").then(() => {
    console.log("Connected to Mongo DB");
})
.catch(err => {
    console.log(err);
});

module.exports = {
    mongoose
}