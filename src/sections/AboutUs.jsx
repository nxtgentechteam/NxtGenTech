import React from 'react';
import { Users, Target, Award, Lightbulb, ArrowRight, Code } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that align with your business goals and drive real results.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you throughout every step of the process.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We maintain the highest standards in code quality, security, and performance.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for your business.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-blue-400 mb-6 backdrop-blur-sm">
            <Users className="h-4 w-4" aria-hidden="true" />
            <span>About Us</span>
          </div>
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building the Future,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              With Every Code We Write
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            We are a team of passionate developers and digital strategists dedicated to transforming your vision into powerful, scalable digital solutions.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Your Vision, Our Expertise
            </h3>
            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
                At NxtGen Tech, we believe that every great digital solution starts with understanding your unique challenges and goals. Our team combines technical expertise with business acumen to deliver solutions that not only work flawlessly but also drive real business value.
              </p>
              <p>
                From custom software development to digital transformation consulting, we've helped businesses of all sizes navigate the digital landscape and achieve their objectives. Our approach is collaborative, transparent, and results-focused.
              </p>
              <p>
                We don't just write code – we build partnerships. Every project is an opportunity to learn, grow, and create something meaningful together.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                Let's Work Together
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Element - Professional Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Team Collaboration Image */}
              <div className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 h-48 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-center">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Team Collaboration</h4>
                  <p className="text-sm text-neutral-300">Working together for success</p>
                </div>
              </div>
              
              {/* Technology Stack Image */}
              <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 h-48 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-center">
                  <Code className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Modern Tech</h4>
                  <p className="text-sm text-neutral-300">Cutting-edge solutions</p>
                </div>
              </div>
              
              {/* Innovation Image */}
              <div className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 h-48 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-center">
                  <Lightbulb className="h-12 w-12 text-green-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-neutral-300">Creative problem solving</p>
                </div>
              </div>
              
              {/* Quality Assurance Image */}
              <div className="group bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 h-48 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-center">
                  <Award className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Quality First</h4>
                  <p className="text-sm text-neutral-300">Excellence in delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-neutral-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
