const mongoose = require("mongoose");


const projectDetailSchema = new mongoose.Schema({
    detailDescription1: {
        type: String,
    },
    detailDescription2: {
        type: String,
    },
    wideImage: {
            image :{
                type : String
            },
            description:{
                type : String
            }
    },
    largeImage: {
        image: {
            type: String
        },
        description: {
            type: String
        }
    },
    mediumImage1: {
        image: {
            type: String
        },
        description: {
            type: String
        }
    },
    mediumImage2: {
        image: {
            type: String
        },
        description: {
            type: String
        }
    },
    tallImage: {
        image: {
            type: String
        },
        description: {
            type: String
        }
    }
})


const projectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    shortDescription: {
        type: String,
    },
    projectImage: {
        type: String,
    },
    details: [projectDetailSchema],
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'categories'
    },
    publishDate: {
        type: Date,
    }
}, { timestamps: true })

module.exports = mongoose.model("projects", projectSchema)