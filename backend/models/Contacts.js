const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Name is required.'],

    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email is required.'],
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address']
    },
    number: {
        type: String,
        required: true, 
        unique: [true, 'Number is required.'],
        match: [
            /^\d{10}$/,
            'Please enter a valid number.'
        ]
    },
    message: {
        type:String,
        required: [true, 'Message is required.'],
    }
}, { timestamps: true })

module.exports = mongoose.model("contacts", userSchema)