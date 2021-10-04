const mongoose = require('mongoose');
const validator = require("validator");
const stSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already presnt"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("email is not valid")
            }
        }
    },
    phone: {
        type: Number,
        min: 5,
        required: true,
        unique: true
    },
    adress: {
        type: String,
        required: true
    }

})

const st = new mongoose.model('Student', stSchema)
module.exports = st