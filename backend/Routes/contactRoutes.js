const express = require('express')
const router = express.Router();
const Contact = require('../models/Contacts')
var nodemailer = require('nodemailer');


router.post("/Contact", async (req, res) => {
  try {

    const contact = new Contact(req.body);
    await contact.save();
    

    const formData = req.body;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aditya@adinitiative.in',
        pass: 'wfmv splp lxam dsko'
      }
    });


    var mailOptions = {
      from: 'aditya@adinitiative.in',
      to: formData.email,
      cc:'manali@adinitiative.in;aditya@adinitiative.in',
      subject: 'Thank You for Your Inquiry at ADInitiative',
      text: 
      `

      Dear ${formData.name},
          
      Thank you for reaching out to us
      and expressing your interest
              
      Name: ${formData.name}
      Email: ${formData.email}
      Number: ${formData.number}
      Message: ${formData.message}
            
      let us get back to you shortly !

      Best Regards,
      ADInitiative
        
            
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    


    return res.send({
      success: true,
      message: "Contact Information Saved",
    })
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.number) {
      
      return res.send({
        success: false,
        message: 'This Number has already been registered',
      })
    }else if(error.code === 11000 && error.keyPattern && error.keyPattern.email){
      return res.send({
        success: false,
        message: 'This email has already been registered',
      })
    }else if(error.name === 'ValidationError' && error.errors.email){
      if(error.errors.email.kind === 'regexp'){
        return res.send({
          success: false,
          message: 'Please enter a valid email address',
        })
      }else{
        return res.send({
          success: false,
          message: 'Please enter email address',
        })
      }

      
      
    }else if(error.name === 'ValidationError'  && error.errors.name){
      
      if(error.errors.name.kind === 'required'){
        return res.send({
          success: false,
          message: 'Please enter Your name',
        })
      }
    }else if(error.name === 'ValidationError'  && error.errors.number){
      
      if(error.errors.number.kind === 'regexp'){
        return res.send({
          success: false,
          message: 'Please enter valid number',
        })
      }else{
        return res.send({
          success: false,
          message: 'Please enter your number',
        })
      }
    }else if(error.name === 'ValidationError'  && error.errors.message){
      
      if(error.errors.message.kind === 'required'){
        return res.send({
          success: false,
          message: 'Please enter Your message',
        })
      }
    }
      
    
      return res.send({
        success: false,
        message: error.message,
      })
    }
})

module.exports = router;