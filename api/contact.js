// Contact form API endpoint
// This would typically be a serverless function or backend API

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, company, projectType, budget, timeline, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Here you would integrate with your email service
    // For now, we'll simulate the email sending process
    
    // Email to business (you)
    const businessEmail = {
      to: 'hello@visioncode.dev', // Your business email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This message was sent from your website contact form.</em></p>
      `
    };

    // Confirmation email to user
    const userEmail = {
      to: email,
      subject: 'Thank you for contacting VisionCode!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank you for contacting VisionCode!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out to us! We've received your message and will get back to you within 24 hours during business days.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Your Project Details:</h3>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Visit our website to learn more about our services</li>
            <li>Check out our portfolio of recent projects</li>
            <li>Follow us on social media for updates</li>
          </ul>
          
          <p>If you have any urgent questions, you can reach us directly at:</p>
          <p>
            📧 <a href="mailto:hello@visioncode.dev">hello@visioncode.dev</a><br>
            📞 <a href="tel:+12025551234">+1 (202) 555-1234</a>
          </p>
          
          <p>Best regards,<br>
          The VisionCode Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            VisionCode - Your Vision, Our Code<br>
            Digital Solutions & Web Development
          </p>
        </div>
      `
    };

    // Here you would send the emails using your preferred email service
    // Examples: SendGrid, Nodemailer, AWS SES, etc.
    
    // For demonstration, we'll just log the emails
    console.log('Business Email:', businessEmail);
    console.log('User Email:', userEmail);
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ 
      message: 'Message sent successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending message. Please try again.',
      success: false 
    });
  }
}


