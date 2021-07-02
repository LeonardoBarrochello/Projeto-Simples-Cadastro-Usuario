const nodemailer = require('nodemailer');

module.exports = {
        send(email,message){
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: email,
                    pass: '246578901'
                }
            });
            
            let mailOptions = {
                from: email,
                to: 'leonardobarrochello57@gmail.com',
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
