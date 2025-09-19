#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up VisionCode Email Service...\n');

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, 'email-service', '.env');
const envExamplePath = path.join(__dirname, 'email-service', 'env.example');

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from template');
  } else {
    const envContent = `# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
BUSINESS_EMAIL=hello@visioncode.dev

# Server Configuration
PORT=3001`;
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env file');
  }
} else {
  console.log('ℹ️  .env file already exists');
}

console.log('\n📋 Next Steps:');
console.log('1. Update email-service/.env with your email credentials');
console.log('2. Install dependencies: cd email-service && npm install');
console.log('3. Start the email service: cd email-service && npm start');
console.log('4. Start your React app: npm run dev');
console.log('\n📧 Email Setup:');
console.log('- Use Gmail with App Password (not regular password)');
console.log('- Enable 2-Factor Authentication first');
console.log('- Generate App Password in Google Account settings');
console.log('\n🔗 The contact form will send emails to:');
console.log('- Business: hello@visioncode.dev (configurable)');
console.log('- User: Their email address (confirmation)');
console.log('\n✨ Setup complete! Happy coding!');


