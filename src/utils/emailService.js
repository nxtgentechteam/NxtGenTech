// EmailJS service for sending contact form emails
import emailjs from 'emailjs-com';

// Initialize EmailJS with your service ID
const SERVICE_ID = 'service_aqxsjpp';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // You'll need to get this from EmailJS dashboard

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  try {
    // Email to business (you)
    const businessEmailParams = {
      to_email: 'hello@visioncode.dev',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      project_type: formData.projectType || 'Not specified',
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified',
      message: formData.message,
      subject: `New Contact Form Submission from ${formData.name}`,
      reply_to: formData.email
    };

    // Confirmation email to user
    const userEmailParams = {
      to_email: formData.email,
      to_name: formData.name,
      from_name: 'VisionCode Team',
      from_email: 'hello@visioncode.dev',
      project_type: formData.projectType || 'Not specified',
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified',
      message: formData.message,
      subject: 'Thank you for contacting VisionCode!',
      reply_to: 'hello@visioncode.dev'
    };

    // Send both emails
    const businessResult = await emailjs.send(
      SERVICE_ID,
      'template_business', // You'll need to create this template in EmailJS
      businessEmailParams
    );

    const userResult = await emailjs.send(
      SERVICE_ID,
      'template_user', // You'll need to create this template in EmailJS
      userEmailParams
    );

    console.log('Business email sent:', businessResult);
    console.log('User email sent:', userResult);

    return { success: true, message: 'Message sent successfully!' };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error sending message. Please try again.' };
  }
};


