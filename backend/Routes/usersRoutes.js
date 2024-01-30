const express = require('express');
const router = express.Router();
const authMiddleware = require('../controller/authMiddleware');
const Users = require('../models/Users');


router.get("/get-all-users",authMiddleware, async (req, res) => {
    try {

        const users = await Users.find();
        return res.send({
            success: true,
            data: users,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

module.exports = router;