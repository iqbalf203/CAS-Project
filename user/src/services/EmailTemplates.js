

const templates = {
    welcome: (user) => {
        return `
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f3f3f3;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }
                .email-container {
                    background-color: #ffffff;
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #007bff;
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                    border-radius: 8px 8px 0 0;
                }
                .header h1 {
                    margin: 0;
                }
                .content {
                    padding: 20px;
                }
                .content h2 {
                    color: #333333;
                }
                .content p {
                    color: #555555;
                    line-height: 1.6;
                }
                .footer {
                    text-align: center;
                    padding: 10px;
                    color: #999999;
                    font-size: 12px;
                }
                ul {
                    padding-left: 20px;
                }
                li {
                    margin-bottom: 10px;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <h1>Welcome to City Administration System!</h1>
                </div>
                <div class="content">
                    <p>Dear ${user.name},</p>
                    <p>We are thrilled to welcome you to City Administration System! Your registration was successful, and you are now part of our community.</p>
                    <p>Here are your registration details:</p>
                    <ul>
                        <li><strong>Username:</strong> ${user.username}</li>
                        <li><strong>Password:</strong> ${user.password}</li>
                    </ul>
                    <p>Please keep this information secure and do not share it with anyone. You can now log in to your account using your username and password.</p>
                    <p>If you have any questions or need assistance, feel free to contact our support team at <a href="mailto:support@example.com">support@example.com</a>. We're here to help!</p>
                    <p>Once again, welcome aboard! We're excited to have you with us.</p>
                    <p>Best regards,<br>The City Administration System Team</p>
                </div>
                <div class="footer">
                    &copy; 2024 City Administration System. All rights reserved.
                </div>
            </div>
        </body>
        </html>
        `;
    },
    forgotPassword: (user) => {
        return `
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #007bff;
                }
                p {
                    margin-bottom: 20px;
                    color: #555555;
                    line-height: 1.6;
                }
                .button {
                    display: inline-block;
                    background-color: #66FF99;
                    color: #fff;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                }
                .footer {
                    text-align: center;
                    padding: 10px;
                    color: #999999;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>New Password</h1>
                <p>Hi ${user.name},</p>
                <p>Your password has been successfully reset. Here is your new password:</p>
                <p><strong>New Password:</strong> ${user.password}</p>
                <p>Please log in with your new password and consider changing it to a more secure one.</p>
                <a href="https://example.com/login" class="button">Login</a>
                <p>If you didn't request this password change, please contact us immediately.</p>
                <p>Best regards,<br>The City Administration System Team</p>
            </div>
        </body>
        </html>
        `;
    },
    complaintRegistration: (complaintId) => {
        return `
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                    color: #555555;
                    line-height: 1.6;
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
                <h1>Complaint Registration Confirmation</h1>
                <p>Dear user,</p>
                <p>Your complaint has been successfully registered with the following details:</p>
                <p><strong>Complaint ID:</strong> ${complaintId}</p>
                <p>We will review your complaint and get back to you as soon as possible.</p>
                <p>Thank you.</p>
                <p>Best regards,<br>The City Administration System Team</p>
            </div>
        </body>
        </html>
        `;
    },

    respondToCitizen: (content)=>{
        return `
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007bff;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            color: #333333;
        }
        .content p {
            color: #555555;
            line-height: 1.6;
        }
        .footer {
            text-align: center;
            padding: 10px;
            color: #999999;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Complaint Status Update</h1>
        </div>
        <div class="content">
            <h2>Dear user,</h2>
            <p>${content}</p>
            <p>If you have any further questions or require additional information, please feel free to contact us.</p>
            <p>Thank you for your patience and cooperation.</p>
            <p>Best regards,</p>
            <p>The Support Team</p>
        </div>
        <div class="footer">
            &copy; 2024 Your Company. All rights reserved.
        </div>
    </div>
</body>
</html>
        `;
    }
};

export { templates };
