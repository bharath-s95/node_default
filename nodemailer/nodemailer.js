var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bharathntavailable@gmail.com',
        pass: 'bharaths@95'
    }
});

var mailOptions = {
    from: 'bharathntavailable@gmail.com',
    to: 'bharathsampangi95@gmail.com',
    subject: 'Hi there!',
    text: 'Welcome to NodeMailer!'
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent ', info.response);
})