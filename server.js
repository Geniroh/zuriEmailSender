const express = require('express');
const app = express();
require('dotenv').config();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) =>{

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });
    let mailOptions = {
        from: "test@test.com",
        to: "irochibuzor@gmail.com",
        subject: 'Zuri Nodemailer Project',
        text: 'Hi from your nodemailer project'
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log("Error " + err);
            res.send('There was an error')
        } else {
            res.send("Email sent successfully")
        }
    });

   
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});