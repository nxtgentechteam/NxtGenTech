import React from 'react';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <main id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="main">
      {/* Background with gradient and abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-blue-950 to-purple-950" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Slogan and Description */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-blue-400 mb-8 backdrop-blur-sm" role="banner">
              <Code className="h-4 w-4" aria-hidden="true" />
              <span>Modern Digital Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Vision,{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Our Code
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              Helping businesses grow through digital transformation, custom software, and online visibility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                aria-label="Connect with VisionCode for digital solutions"
              >
                Connect with Us
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a 
                href="#services" 
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                aria-label="View our digital services"
              >
                View Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Side - Trust Indicators */}
          <aside className="grid grid-cols-1 gap-6" role="complementary" aria-label="Why choose VisionCode">
            <article className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg" aria-hidden="true">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Trusted Delivery</h3>
                <p className="text-sm text-neutral-400">Proven track record of successful projects</p>
              </div>
            </article>
            <article className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg" aria-hidden="true">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Scalable Architecture</h3>
                <p className="text-sm text-neutral-400">Built to grow with your business</p>
              </div>
            </article>
            <article className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="p-3 bg-green-500/20 rounded-lg" aria-hidden="true">
                <Code className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">On-Time Results</h3>
                <p className="text-sm text-neutral-400">Delivered when promised, every time</p>
              </div>
            </article>
          </aside>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
