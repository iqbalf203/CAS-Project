const templates = {
    welcome: (user) => {
        return `
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
                <h1>Welcome to City Administration System!</h1>
                <p>Dear ${user.name},</p>
                <p>We are thrilled to welcome you to City Administration System! Your registration was successful, and you are now part of our community.</p>
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
    },
    forgotPassword: (user) => {
        return `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Password</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f3f3f3;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #007bff;
                }
                p {
                    margin-bottom: 20px;
                }
                .button {
                    display: inline-block;
                    background-color: #66FF99;
                    color: #fff;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>New Password</h1>
                <p>Hi ${user.name}, </p>
                <p>Your password has been successfully reset. Here is your new password:</p>
                <p><strong>New Password:</strong> ${user.password}</p>
                <p>Please login with your new password and consider changing it to a more secure one.</p>
                <a href="https://example.com/login" class="button">Login</a>
                <p>If you didn't request this password change, please contact us immediately.</p>
                <p>Best regards</p>
            </div>
        </body>
        </html>
        `;
    },
    complaintRegistration: (complaintId) => {
        return `
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
            <div class="container">
                <h1>Complaint Registration Confirmation</h1>
                <p>Dear User,</p>
                <p>Your complaint has been successfully registered with the following details:</p>
                <p><strong>Complaint ID:</strong> ${complaintId}</p>
                <p>We will review your complaint and get back to you as soon as possible.</p>
                <p>Thank you.</p>
            </div>
        </body>
        </html>
        `;
    }
};

export { templates };
