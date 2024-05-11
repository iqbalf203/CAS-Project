import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

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

const sendEmail = (eTo,eSubject,user)=>{
    // const body = `
    // Dear ${user.name},
    
    // We are thrilled to welcome you to City Administrator System! Your registration was successful, and you are now part of our community.
    
    // Here are your registration details:
    
    // Username: ${user.username}
    // Password: ${user.password}
    // Please keep this information secure and do not share it with anyone. You can now log in to your account using your username and password.
    
    // If you have any questions or need assistance, feel free to contact our support team at [support@example.com]. We're here to help!
    
    // Once again, welcome aboard! We're excited to have you with us.
    
    // Best regards.
    // `;

    const body = `
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f3f3f3;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h1 {
                color: #007bff;
            }
        </style>
    </head>
    <body>
        <div class="container"><strong>
            <h1>Welcome to City Administrator System!</h1>
            <p>Dear ${user.name},</p>
            <p>We are thrilled to welcome you to City Administrator System! Your registration was successful, and you are now part of our community.</p>
            <p>Here are your registration details:</p>
            <ul>
                <li>Username: ${user.username}</li>
                <li>Password: ${user.password}</li>
            </ul>
            <p>Please keep this information secure and do not share it with anyone. You can now log in to your account using your username and password.</p>
            <p>If you have any questions or need assistance, feel free to contact our support team at [support@example.com]. We're here to help!</p>
            <p>Once again, welcome aboard! We're excited to have you with us.</p>
            <p>Best regards.</p>
        </div>
    </body>
    </html>
    `;
    const mailOptions = {
        from: 'fiqbal997@gmail.com',
        to: eTo,
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