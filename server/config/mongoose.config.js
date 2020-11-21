const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exam_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I found the mongoose"))
    .catch(() => console.log("I cant find mongoose"))