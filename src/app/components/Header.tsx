import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';

// Banner image from assets
const bannerImage = new URL('../../assets/banner.png', import.meta.url).href;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Banner */}
      <div className="w-full glass-card-strong">
        <img 
          src={bannerImage} 
          alt="Deva Bahuddeshiya Sanstha Banner" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Sticky Glassmorphism Navigation */}
      <nav className="sticky top-0 glass-nav z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Title - Mobile */}
            <Link 
              to="/" 
              className="text-lg md:hidden font-bold gradient-text flex items-center gap-2"
            >
              <Heart className="w-5 h-5 text-[var(--accent)]" />
              देवा संस्था
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2 w-full justify-center">
              <Link 
                to="/" 
                className="px-4 py-2 rounded-xl text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] transition-all duration-300 font-medium"
              >
                Home
              </Link>
              
              <Link 
                to="/health-services" 
                className="px-4 py-2 rounded-xl text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] transition-all duration-300 font-medium"
              >
                Health Services
              </Link>

              {/* Education Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('education')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 rounded-xl text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-1 font-medium">
                  Education <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'education' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'education' && (
                  <div className="absolute top-full left-0 glass-card-strong mt-2 py-2 w-52 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link to="/education/primary" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/40 hover:text-[var(--primary)] hover:pl-6 transition-all duration-200">Primary</Link>
                    <Link to="/education/middle" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/40 hover:text-[var(--primary)] hover:pl-6 transition-all duration-200">Middle</Link>
                    <Link to="/education/secondary" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/40 hover:text-[var(--primary)] hover:pl-6 transition-all duration-200">Secondary</Link>
                    <Link to="/education/higher-secondary" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/40 hover:text-[var(--primary)] hover:pl-6 transition-all duration-200">Higher Secondary</Link>
                    <Link to="/education/college" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/40 hover:text-[var(--primary)] hover:pl-6 transition-all duration-200">College</Link>
                  </div>
                )}
              </div>

              <Link 
                to="/community-service" 
                className="px-4 py-2 rounded-xl text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] transition-all duration-300 font-medium"
              >
                Community Service
              </Link>

              {/* Jobs Alert Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('jobs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 rounded-xl text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-1 font-medium">
                  Jobs Alert <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'jobs' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'jobs' && (
                  <div className="absolute top-full left-0 glass-card-strong mt-2 py-2 w-52 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link to="/jobs?type=private" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/40 hover:text-[var(--primary)] hover:pl-6 transition-all duration-200">Private Jobs</Link>
                    <Link to="/jobs?type=government" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/40 hover:text-[var(--primary)] hover:pl-6 transition-all duration-200">Government Jobs</Link>
                  </div>
                )}
              </div>

              <Link 
                to="/government-exams" 
                className="px-4 py-2 rounded-xl text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] transition-all duration-300 font-medium"
              >
                Government Exams
              </Link>

              <Link 
                to="/contact" 
                className="px-4 py-2 rounded-xl text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] transition-all duration-300 font-medium"
              >
                Contact Us
              </Link>

              <Link 
                to="/about" 
                className="px-4 py-2 rounded-xl text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] transition-all duration-300 font-medium"
              >
                About Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/20 hover:bg-white/40 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[var(--foreground)]" /> : <Menu className="w-5 h-5 text-[var(--foreground)]" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-1 animate-in slide-in-from-top-4 duration-300">
              <Link to="/" className="block px-4 py-3 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200 font-medium">
                Home
              </Link>
              <Link to="/health-services" className="block px-4 py-3 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200 font-medium">
                Health Services
              </Link>
              
              {/* Education Submenu */}
              <div>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'education' ? null : 'education')}
                  className="w-full text-left px-4 py-3 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl flex items-center justify-between transition-all duration-200 font-medium"
                >
                  Education <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'education' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'education' && (
                  <div className="pl-4 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                    <Link to="/education/primary" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200">Primary</Link>
                    <Link to="/education/middle" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200">Middle</Link>
                    <Link to="/education/secondary" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200">Secondary</Link>
                    <Link to="/education/higher-secondary" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200">Higher Secondary</Link>
                    <Link to="/education/college" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200">College</Link>
                  </div>
                )}
              </div>

              <Link to="/community-service" className="block px-4 py-3 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200 font-medium">
                Community Service
              </Link>

              {/* Jobs Submenu */}
              <div>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'jobs' ? null : 'jobs')}
                  className="w-full text-left px-4 py-3 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl flex items-center justify-between transition-all duration-200 font-medium"
                >
                  Jobs Alert <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'jobs' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'jobs' && (
                  <div className="pl-4 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                    <Link to="/jobs?type=private" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200">Private Jobs</Link>
                    <Link to="/jobs?type=government" className="block px-4 py-2.5 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200">Government Jobs</Link>
                  </div>
                )}
              </div>

              <Link to="/government-exams" className="block px-4 py-3 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200 font-medium">
                Government Exams
              </Link>
              <Link to="/contact" className="block px-4 py-3 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200 font-medium">
                Contact Us
              </Link>
              <Link to="/about" className="block px-4 py-3 text-[var(--foreground)] hover:bg-white/30 hover:text-[var(--primary)] rounded-xl transition-all duration-200 font-medium">
                About Us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
