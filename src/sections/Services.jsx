import React from 'react';
import { Monitor, Wrench, DollarSign, Check, ArrowRight } from 'lucide-react';
import service1Img from '../assets/img1.png';
import service2Img from '../assets/img2.png';
import service3Img from '../assets/img3.png';

// Services data
const services = [
  {
    icon: Monitor,
    title: 'Small Business Websites',
    desc: 'End-to-end deployment and deliverable solutions tailored for small businesses to establish their digital presence.',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Delivery'],
    image: service1Img,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    desc: 'Continuous support and maintenance services to keep your website running smoothly and up-to-date.',
    features: ['24/7 Support', 'Regular Updates', 'Security Monitoring', 'Performance Optimization'],
    image: service2Img,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: DollarSign,
    title: 'Affordable Web Solutions',
    desc: 'Cost-effective web solutions designed to deliver maximum value without compromising on quality.',
    features: ['Budget Friendly', 'Quality Assured', 'Quick Turnaround', 'Scalable Solutions'],
    image: service3Img,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
  },
  // Add more services here
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-blue-400 mb-6 backdrop-blur-sm">
            <Monitor className="h-4 w-4" aria-hidden="true" />
            <span>Our Services</span>
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Do Best
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Our digital services">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <article 
                key={idx} 
                className="group relative bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 overflow-hidden cursor-pointer"
                role="listitem"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Image Section */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} image`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute top-4 right-4 p-2 rounded-lg ${service.bgColor} backdrop-blur-sm`}>
                    <IconComponent className={`h-6 w-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed" itemProp="description">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6" role="list" aria-label="Service features">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2" role="listitem">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Professional Service Tag - always blue */}
                  <div className={`inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg`} aria-label="Professional service badge">
                    Professional Service
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <footer className="text-center mt-16">
          <p className="text-lg text-neutral-300 mb-8">
            Ready to transform your business with our digital solutions?
          </p>
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            aria-label="Get started with VisionCode digital solutions"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Services;
