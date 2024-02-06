const express = require('express');
const router = express.Router();
const authMiddleware = require('../controller/authMiddleware')
const Project = require('../models/Project');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Category = require('../models/Category');

cloudinary.config({
    cloud_name: 'dyhf9rqfz',
    api_key: '285948121959258',
    api_secret: '3iyVkfGeQoZEyJbqQIKoDma8iAk',
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req,res) => {
        let folder;
        if(req.body.folderName === 'category'){
            folder = `Articulated-Design-Initiative/${req.body.folderName}`
        }
        else if(req.body.folderName === 'projects'){
            folder = `Articulated-Design-Initiative/${req.body.folderName}/${req.body.title}`
        }
        
        return {
            folder: folder,
        };
       
    }
});


const upload = multer({ storage: storage });

router.post("/post-project", authMiddleware, upload.single('projectImage'), async (req, res) => {
    try {


        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        // const result = await cloudinary.uploader.upload(req.file.path);

        const project = new Project({
            title: req.body.title,
            area: req.body.area,
            location:req.body.location,
            photography:req.body.photography,
            shortDescription: req.body.shortDescription,
            category: req.body.category,
            details: [],
            projectImage: req.file.path,
            publishDate: req.body.publishDate
        });

        await project.save();

        return res.send({
            success: true,
            message: "Project Information Sent",
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.post("/post-category", authMiddleware, upload.single('categoryImage'), async (req, res) => {
    try {


        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        // const result = await cloudinary.uploader.upload(req.file.path);

        const category = new Category({
            name: req.body.name,
            categoryImage: req.file.path
        });

        await category.save();

        return res.send({
            success: true,
            message: "Category Information Sent",
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.post("/post-detail-project", authMiddleware, upload.fields([
    { name: 'wideImage', maxCount: 1 },
    { name: 'largeImage', maxCount: 1 },
    { name: 'medium1Image', maxCount: 1 },
    { name: 'medium2Image', maxCount: 1 },
    { name: 'tallImage', maxCount: 1 }
]), async (req, res) => {
    try {
        console.log(req.body.projectId)
        console.log(req.files['wideImage'][0].path)
        console.log(req.body.wideImageDescription)

        const project = await Project.findOne({title:req.body.title}).then(
            (project) => {
                if (!project) {
                    console.log('Project not found');
                    return;
                }


                project.details.push({
                    wideImage: {
                        image: req.files['wideImage'][0].path,
                        description: req.body.wideImageDescription
                    },
                    largeImage: {
                        image: req.files['largeImage'][0].path,
                        description: req.body.largeImageDescription
                    },
                    tallImage: {
                        image: req.files['tallImage'][0].path,
                        description: req.body.tallImageDescription
                    },
                    mediumImage1: {
                        image: req.files['medium1Image'][0].path,
                        description: req.body.medium1ImageDescription
                    },
                    mediumImage2: {
                        image: req.files['medium2Image'][0].path,
                        description: req.body.medium2ImageDescription
                    },
                    detailDescription1: req.body.description1,
                    detailDescription2: req.body.description2,
                })

                project.save();


            }
        );

        return res.send({
            success: true,
            data: project,
            message: "updated!"
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/get-project-by-id/:id", async (req, res) => {
    try {

        const project = await Project.findById(req.params.id);
        return res.send({
            success: true,
            data: project
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/get-all-projects", async (req, res) => {
    try {

        const projects = await Project.find();
        return res.send({
            success: true,
            data: projects,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/get-all-categories", async (req, res) => {
    try {

        const categories = await Category.find();
        return res.send({
            success: true,
            data: categories,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/get-category-by-id/:id", async (req, res) => {
    try {

        const category = await Category.findById(req.params.id);
        return res.send({
            success: true,
            data: category,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get('/search-category/:id', async (req, res) => {
    const categoryId = req.params.id;
    

    try {
        const projects = await Project.find({ category: categoryId }).populate('category');
        return res.send({
            success: true,
            data: projects,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
});

module.exports = router;