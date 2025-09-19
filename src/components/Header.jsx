import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-950/60" role="banner">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group inline-flex items-center" aria-label="NextGen Techies - Digital Solutions Company">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              NxtGen Tech
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <a href="#home" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 hover:scale-105" aria-label="Go to Home section">Home</a>
            <a href="#about" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 hover:scale-105" aria-label="Go to About section">About</a>
            <a href="#services" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 hover:scale-105" aria-label="Go to Services section">Services</a>
            <a href="#contact" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 hover:scale-105" aria-label="Go to Contact section">Contact</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              aria-label="Get in touch with VisionCode"
            >
              Get in Touch
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5 text-white" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-neutral-950/95 backdrop-blur-md" role="navigation" aria-label="Mobile navigation">
          <div className="mx-auto max-w-7xl px-6 py-6 space-y-4">
            <a href="#home" className="block text-neutral-300 hover:text-white transition-colors py-2" aria-label="Go to Home section">Home</a>
            <a href="#about" className="block text-neutral-300 hover:text-white transition-colors py-2" aria-label="Go to About section">About</a>
            <a href="#services" className="block text-neutral-300 hover:text-white transition-colors py-2" aria-label="Go to Services section">Services</a>
            <a href="#contact" className="block text-neutral-300 hover:text-white transition-colors py-2" aria-label="Go to Contact section">Contact</a>
            <a 
              href="#contact" 
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mt-4"
              aria-label="Get in touch with VisionCode"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
