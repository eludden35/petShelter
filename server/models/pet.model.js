const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Requires name"],
        minlength: [3, "Must atleast be 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Requires dog type"],
        minlength: [3, "Must atleast be 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Requires dog description"],
        minlength: [3, "Must atleast be 3 characters"]
    },
    skillOne: {
        type: String,
        required: [false]
    },
    skillTwo: {
        type: String,
        required: [false]
    },
    skillThree: {
        type: String,
        required: [false]
    },
    liked: {
        type: Number,
        required: [false]
    }
}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;