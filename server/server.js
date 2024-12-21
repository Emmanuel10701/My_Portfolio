import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Create a transporter using a custom SMTP server
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP server hostname
    port: 587, // Use 465 for SSL or 587 for TLS
    secure: false, // Set true if port is 465 (SSL)
    auth: {
      user: process.env.EMAIL_USER, // Your SMTP username
      pass: process.env.EMAIL_PASS, // Your SMTP password
    },
  });

  // Set up the email options for sending the message to you
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Your email
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
}
