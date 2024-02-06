const express = require('express');
const router = express.Router();
const authMiddleware = require('../controller/authMiddleware')
const Project = require('../models/Project');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const media = require('../models/media');

cloudinary.config({
    cloud_name: 'dyhf9rqfz',
    api_key: '285948121959258',
    api_secret: '3iyVkfGeQoZEyJbqQIKoDma8iAk',
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Articulated-Design-Initiative/media', 
    },
});


const upload = multer({ storage: storage });


router.post("/post-media", authMiddleware, upload.single('mediaImage'), async (req, res) => {
    try {


        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        const mediaProject = new media({
            title: req.body.title,
            projectName: req.body.projectName,
            mediaImage: req.file.path,
            publishDate: req.body.publishDate,
            link:req.body.link
        });

        await mediaProject.save();

        return res.send({
            success: true,
            message: "media Information Sent",
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/get-all-medias", async (req, res) => {
    try {

        const medias = await media.find();
        return res.send({
            success: true,
            data: medias,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})


module.exports = router;