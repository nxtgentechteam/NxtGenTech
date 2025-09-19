const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your app password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, projectType, budget, timeline, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      success: false 
    });
  }

  try {
    // Email to business (you)
    const businessEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || 'hello@visioncode.dev',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Message</h3>
            <p>${message}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            <em>This message was sent from your VisionCode website contact form at ${new Date().toLocaleString()}.</em>
          </p>
        </div>
      `
    };

    // Confirmation email to user
    const userEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting VisionCode!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3b82f6; margin: 0;">VisionCode</h1>
            <p style="color: #6b7280; margin: 5px 0;">Your Vision, Our Code</p>
          </div>
          
          <h2 style="color: #1e40af;">Thank you for contacting us!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out to VisionCode! We've received your message and will get back to you within 24 hours during business days.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Your Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
            <ul style="color: #374151;">
              <li>Our team will review your project requirements</li>
              <li>We'll prepare a detailed proposal tailored to your needs</li>
              <li>We'll schedule a call to discuss your project in detail</li>
              <li>You'll receive a comprehensive project timeline and pricing</li>
            </ul>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Need Immediate Assistance?</h3>
            <p style="margin: 0;">If you have any urgent questions, you can reach us directly:</p>
            <p style="margin: 10px 0 0 0;">
              📧 <a href="mailto:hello@visioncode.dev" style="color: #3b82f6;">hello@visioncode.dev</a><br>
              📞 <a href="tel:+12025551234" style="color: #3b82f6;">+1 (202) 555-1234</a>
            </p>
          </div>
          
          <p>Best regards,<br>
          <strong>The VisionCode Team</strong></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <div style="text-align: center; color: #6b7280; font-size: 14px;">
            <p style="margin: 0;"><strong>VisionCode</strong> - Digital Solutions & Web Development</p>
            <p style="margin: 5px 0;">San Francisco, CA | <a href="https://visioncode.com" style="color: #3b82f6;">visioncode.com</a></p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmailOptions),
      transporter.sendMail(userEmailOptions)
    ]);

    res.status(200).json({ 
      message: 'Message sent successfully! We\'ll get back to you soon.',
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending message. Please try again or contact us directly.',
      success: false 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    message: 'Email service is running',
    status: 'healthy' 
  });
});

app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});


