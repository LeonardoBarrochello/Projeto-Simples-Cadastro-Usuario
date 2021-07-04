const nodemailer = require('nodemailer');

module.exports = {
        send(email,message){
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: 'leonardobarrochello58@gmail.com',
                    pass: '246578901'
                }
            });
            
            let mailOptions = {
                from: 'leonardobarrochello58@gmail.com',
                to: email,
                subject: 'Test',
                text: message
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error.message);
                }
                console.log('success');
            }); 
        }
 }
