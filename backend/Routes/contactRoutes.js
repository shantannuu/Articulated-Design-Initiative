const express = require('express')
const router = express.Router();
const Contact = require('../models/Contacts')
var nodemailer = require('nodemailer');


router.post("/Contact", async (req, res) => {
    try {
        const formData = req.body;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'shantanubolate@gmail.com',
              pass: 'gjno avpr njyb gewq'
            }
          });
        

        var mailOptions = {
            from: 'pmanali0193@gmail.com',
            to: formData.email,
            subject: 'Sending Email using Node.js',
            text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
            User's Email: ${formData.email} 
          `,
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
       
          const contact = new Contact(req.body);
            await contact.save();

        return res.send({
            success: true,
            message: "Contact Information Saved",
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

module.exports = router;