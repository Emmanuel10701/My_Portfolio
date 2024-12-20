const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// POST route for sending email
app.post('/api/server', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Create a transporter using SMTP service (e.g., Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Get email user from .env file
      pass: process.env.EMAIL_PASS,  // Get email pass from .env file
    },
  });

  // Set up the email options for sending the message to you
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,  // Your email
    subject: `New Message from ${name}`,
    text: `Message from: ${name}\n\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7fc; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; font-size: 24px;">You have a new message from ${name}</h2>
        <p style="color: #555; font-size: 16px;">Here are the details of the message:</p>
        <div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <p style="color: #333; font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="color: #333; font-size: 16px;"><strong>Email:</strong> ${email}</p>
          <p style="color: #333; font-size: 16px;"><strong>Message:</strong></p>
          <p style="color: #555; font-size: 16px;">${message}</p>
        </div>
        <p style="font-size: 12px; color: #777; margin-top: 20px;">This email was sent from your contact form.</p>
      </div>
    `,
  };

  // Set up the thank-you email options for the user
  const thankYouMailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // The user's email
    subject: 'Thank you for reaching out!',
    text: `Hi ${name},\n\nThank you for reaching out to me! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nEmmanuel`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7fc; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; font-size: 24px;">Hi ${name},</h2>
        <p style="color: #555; font-size: 16px;">Thank you for reaching out to me! I have received your message and will get back to you as soon as possible.</p>
        <p style="color: #333; font-size: 16px;">Best regards,</p>
        <p style="color: #555; font-size: 16px;">Emmanuel</p>
      </div>
    `,
  };

  try {
    // Send the email to yourself
    await transporter.sendMail(mailOptions);

    // Send the thank-you email to the user
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
