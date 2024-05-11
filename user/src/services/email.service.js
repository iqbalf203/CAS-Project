import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    service: 'gmail',
    auth: {
        user: 'fiqbal997@gmail.com', 
        pass: 'rzlv owvd oess fslr' 
    }
});

const sendEmail = (eTo,eSubject,user)=>{
    const body = `
    Dear ${user.name},
    
    We are thrilled to welcome you to City Administrator System! Your registration was successful, and you are now part of our community.
    
    Here are your registration details:
    
    Username: ${user.username}
    Password: ${user.password}
    Please keep this information secure and do not share it with anyone. You can now log in to your account using your username and password.
    
    If you have any questions or need assistance, feel free to contact our support team at [support@example.com]. We're here to help!
    
    Once again, welcome aboard! We're excited to have you with us.
    
    Best regards.
    `;
    const mailOptions = {
        from: 'fiqbal997@gmail.com',
        to: eTo,
        subject: eSubject,
        text: body
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