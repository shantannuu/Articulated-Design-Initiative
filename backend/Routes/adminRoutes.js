const express = require('express')
const router = express.Router();
const Contact = require('../models/Contacts')
const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../controller/authMiddleware');


router.post("/Admin-register", async (req, res) => {
    try {
        const user = await Admin.findOne({ email: req.body.email });
        if (user) {
            return res.send({
                success: false,
                message: "User already exists",
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword;

        const newUser = new Admin(req.body);
        await newUser.save();
        return res.send({
            success: true,
            message: "Admin Created Successfully !",
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.post("/Admin-login", async (req, res) => {
    try {
        const user = await Admin.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User not exists !",
            })
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!validPassword) {
            return res.send({
                success: false,
                message: "Invalid Password",
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.jwt_token, { expiresIn: "1d" })

        return res.send({
            success: true,
            message: "Login Successfully !",
            data: token,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/getContact", authMiddleware,  async (req, res) => {
    try {

        const contact = await Contact.find();
        console.log(contact.data)
        return res.send({
            success: true,
            data: contact,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/get-Logged-in-user", authMiddleware, async (req, res) => {
    try {

        const admin = await Admin.findById(req.body.userIdFromToken);
        if (!admin) {

            return res.send({

                success: false,
                message: "Admin does not exists !",
            });
        }

        return res.send({
            success: true,
            message: "admin details fetched Successfully !",
            data: admin,
        })
    } catch (error) {
        console.log("hello")
        return res.send({

            success: false,
            message: error.message,
        })
    }
})

module.exports = router;