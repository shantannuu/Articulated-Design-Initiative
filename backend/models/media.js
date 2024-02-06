const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    publishDate: {
        type: Date,
    },
    projectName: {
        type: mongoose.Schema.Types.ObjectId, ref: 'projects'
    },
    mediaImage: {
        type: String,
    },
    link:{
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model("medias", mediaSchema)