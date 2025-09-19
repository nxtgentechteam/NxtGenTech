const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// EmailJS configuration
const emailjs = require('emailjs-com');

// Initialize EmailJS
emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

// Contact form endpoint using EmailJS
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
    const businessEmailParams = {
      to_email: process.env.BUSINESS_EMAIL || 'hello@visioncode.dev',
      from_name: name,
      from_email: email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      project_type: projectType || 'Not specified',
      budget: budget || 'Not specified',
      timeline: timeline || 'Not specified',
      message: message,
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email
    };

    // Confirmation email to user
    const userEmailParams = {
      to_email: email,
      to_name: name,
      from_name: 'VisionCode Team',
      from_email: process.env.BUSINESS_EMAIL || 'hello@visioncode.dev',
      project_type: projectType || 'Not specified',
      budget: budget || 'Not specified',
      timeline: timeline || 'Not specified',
      message: message,
      subject: 'Thank you for contacting VisionCode!',
      reply_to: process.env.BUSINESS_EMAIL || 'hello@visioncode.dev'
    };

    // Send both emails using EmailJS
    const businessResult = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      'template_business', // You'll need to create this template
      businessEmailParams
    );

    const userResult = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      'template_user', // You'll need to create this template
      userEmailParams
    );

    console.log('Business email sent:', businessResult);
    console.log('User email sent:', userResult);

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
    message: 'EmailJS service is running',
    status: 'healthy' 
  });
});

app.listen(PORT, () => {
  console.log(`EmailJS service running on port ${PORT}`);
});


