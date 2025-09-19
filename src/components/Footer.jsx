import React from 'react';
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.01%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold text-white">NxtGen Tech</span>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
              Your Vision, Our Code. We help businesses grow through digital transformation, custom software, and online visibility.
            </p>
            <address className="space-y-3 not-italic">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <a href="mailto:nxtgentecteam@gmail.com" className="hover:text-white transition-colors">nxtgentecteam@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <a href="tel:+91-6363699348" className="hover:text-white transition-colors">+91-6363699348</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>Bangalore, India</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Website Listings
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-neutral-400">
                © 2025 NxtGen Tech. All rights reserved.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-neutral-400 hover:text-blue-400" />
              </a>
              <a 
                href="https://www.linkedin.com/company/nxtgen-tec/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
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

            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm text-neutral-300 group-hover:text-white">Back to Top</span>
              <ArrowUp className="h-4 w-4 text-neutral-400 group-hover:text-white group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
