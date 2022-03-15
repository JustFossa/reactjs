const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    password: {
        type: String,
        unique: false,
        trim: true,
        minlength: 5
    }
}, {
    timestamps: true
})

const user = mongoose.model('Users', userSchema)

module.exports = user