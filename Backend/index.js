import express from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import "dotenv/config"

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.listen(port,()=>{
    console.log("Your server is running on 5000")
})


app.get("/",(req,res)=>{
    res.send("Hello")
})


const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    }
})

app.post("/send",(req,res)=>{
    const {name,email,message} = req.body;
    console.log(name,email,message)

    const mailOptions = {
        from: "emailservice.1399@gmail.com",
        to: "samarthbhardwaj1999v2@gmail.com",
        subject: `Message from ${name}`,
        text : `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions,(error,info)=>{
        if (error) {
            return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          res.send('Email sent successfully');
    })
});

/* NEWER WAY OF SENDING MAIL

app.post("/send",(req,res)=>{
    const {name,email,message} = req.body;

    const sendMail = async ()=>{
            const sendMailWithInfo = await transporter.sendMail({
            from: "emailservice.1399@gmail.com",
            to: "samarthbhardwaj1999v2@gmail.com",
            subject: `Message from ${name}`,
            message : `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
        })
           console.log("Message sent: %s", sendMailWithInfo.messageId);
    }
    sendMail().catch(console.error);
});   
*/