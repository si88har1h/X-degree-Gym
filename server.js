const express = require('express');
const app = express();

const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(_dirname + 'https://si88har1h.github.io/X-degree-Gym/')
})

app.post('/', (req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'siddharthmehta.2301@gmail.com',
            pass: 'cqywiljtvqzbhbzi'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'siddharthmehta.2301@gmail.com',
        subject: `Message from ${req.body.email}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('Form filled Successfully' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})