import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
import { templates } from './EmailTemplates.js';

dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendEmail = (eTo,eSubject,templateName,data)=>{
    console.log(templateName)
    const templateFunction = templates[templateName];
    if (!templateFunction) {
        throw new Error(`Template '${templateName}' not found.`);
    }
    console.log(data)
    const body = templateFunction(data)
    console.log(body)
    const mailOptions = {
        from: '"System" <no-reply@example.com>',
        to: eTo.email,
        subject: eSubject,
        html: body
    };
    
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        })
    });
}


export{sendEmail}