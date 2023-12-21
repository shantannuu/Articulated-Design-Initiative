const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'shantanubolate@gmail.com',
        pass: 'gjno avpr njyb gewq',
    },
});

const sendEMail = async (req, res) => {
    const {name,email,number,message} = req.body;
    console(name,email,number,message);
    
    let mailOptions = {
        from: email,
        to: 'shantanuworkid@gmail.com', // Replace with the recipient's email
        subject: 'New Contact Form Submission',
        text:message,
    };

    transporter.sendMail(mailOptions,function (error , info ) {
        if(error){
            console.log(error);
        }else{
            console.log("Email sent successfully");
        }
    })
}

module.exports = {sendEMail};