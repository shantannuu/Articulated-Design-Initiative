const mongoose = require("mongoose");

const userVisitSchema = new mongoose.Schema({
    ip: { type: String },
    userAgent: { type: String },
    referrer: { type: String },
    userId: { type: String },
    pageUrl: { type: String },
    language: { type: String },
    browser: { type: String },
    deviceType: { type: String },
    screenResolution: { type: String },
    date: { type: String },
    time: { type: String },
})

module.exports = mongoose.model("userVisit", userVisitSchema)