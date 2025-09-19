# VisionCode Email Service

This is the email service for handling contact form submissions from the VisionCode website.

## Setup Instructions

### 1. Install Dependencies
```bash
cd email-service
npm install
```

### 2. Configure Email Settings
1. Copy `env.example` to `.env`
2. Update the following variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password (not your regular password)
   - `BUSINESS_EMAIL`: The email where you want to receive contact form submissions

### 3. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Use this password in your `.env` file

### 4. Start the Service
```bash
npm start
```

The service will run on port 3001 by default.

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Example Corp",
  "projectType": "website",
  "budget": "10k-25k",
  "timeline": "2-3-months",
  "message": "I need a new website for my business."
}
```

**Response:**
```json
{
  "message": "Message sent successfully! We'll get back to you soon.",
  "success": true
}
```

### GET /api/health
Health check endpoint.

## Email Templates

The service sends two emails:
1. **Business Email**: Sent to your business email with all contact form details
2. **User Confirmation**: Sent to the user confirming their message was received

## Alternative Email Services

You can easily modify the code to use other email services:
- **SendGrid**: Replace nodemailer with SendGrid SDK
- **AWS SES**: Use AWS SES with nodemailer
- **Mailgun**: Use Mailgun API
- **Outlook**: Change service to 'hotmail' in transporter config

## Deployment

This service can be deployed to:
- **Heroku**: Easy deployment with Procfile
- **Vercel**: Serverless functions
- **AWS Lambda**: Serverless deployment
- **DigitalOcean**: VPS deployment
- **Railway**: Simple deployment platform

## Security Notes

- Never commit your `.env` file
- Use app passwords, not regular passwords
- Consider rate limiting for production
- Add input validation and sanitization
- Use HTTPS in production


