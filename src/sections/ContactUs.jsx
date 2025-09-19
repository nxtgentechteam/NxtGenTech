import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_aqxsjpp',
  CONTACT_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_rluzanp',
  AUTOREPLY_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || 'template_75g00za',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ld2R5FHvHsI5TkBYb',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const businessEmailParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      const userEmailParams = {
        to_email: formData.email,
        to_name: formData.name,
        name: formData.name,
        title: 'Contact Form Submission',
        email: formData.email
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        businessEmailParams
      );

      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.AUTOREPLY_TEMPLATE_ID,
          userEmailParams
        );
      } catch (userError) {
        console.warn('User email failed, but business email succeeded:', userError);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-blue-400 mb-6 backdrop-blur-sm">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Get In Touch</span>
          </div>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-lg text-neutral-300 mb-8">
                Tell us about your goals and we'll follow up within one business day. We're here to help you succeed.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-neutral-300">nxtgentecteam@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-neutral-300">+91-6363699348</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-neutral-300">Bangalore, India</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://x.com/Nxtgen__Tech" 
                  target='_blank'
                  className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-5 w-5 text-neutral-400 hover:text-blue-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/nxtgen-tec/about/" 
                  target='_blank'
                  className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-neutral-400 hover:text-blue-400" />
                </a>
                 <a 
                   href="https://www.instagram.com/nxtgen_.tech?igsh=a3I4Mm83ZngyMms3" 
                   target='_blank'
                   className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
                 >
                   <Instagram className="h-5 w-5 text-neutral-400 hover:text-pink-400" />
                 </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400">Thank you for your message! We'll get back to you within 24 hours.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Please include:
• Project description
• Budget range
• Timeline/deadline
• Any specific requirements
• Contact preferences"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-neutral-400 mt-6 text-center">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
