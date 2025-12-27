import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto relative overflow-hidden">
      {/* Glass Footer */}
      <div className="glass-card-strong border-t border-white/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">देवा बहुउद्देशीय संस्था</h3>
              </div>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                Dedicated to serving the community through healthcare, education, and social welfare programs.
              </p>
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <MapPin className="w-4 h-4 text-[var(--primary)]" />
                <span>लक्ष्मीनारायण नगर, पुसद जि. यवतमाळ</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--secondary)]" />
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/health-services" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Health Services
                  </Link>
                </li>
                <li>
                  <Link to="/education/primary" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Jobs Alert
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    href="mailto:devabspusad025@gmail.com" 
                    className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2"
                  >
                    <div className="p-1.5 rounded-lg bg-[var(--primary)]/10">
                      <Mail className="w-3.5 h-3.5 text-[var(--primary)]" />
                    </div>
                    devabspusad025@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <div className="p-1.5 rounded-lg bg-[var(--success)]/10">
                    <MapPin className="w-3.5 h-3.5 text-[var(--success)]" />
                  </div>
                  Pusad, Yavatmal, Maharashtra
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="font-medium text-[var(--foreground)] mb-3 text-sm">Follow Us</h5>
                <div className="flex gap-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group"
                  >
                    <Facebook className="w-5 h-5 text-[var(--foreground)] group-hover:text-blue-500 transition-colors" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card hover:bg-pink-500/20 hover:scale-110 transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 text-[var(--foreground)] group-hover:text-pink-500 transition-colors" />
                  </a>
                  <a 
                    href="mailto:devabspusad025@gmail.com"
                    className="p-2.5 rounded-xl glass-card hover:bg-green-500/20 hover:scale-110 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-[var(--foreground)] group-hover:text-green-500 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-[var(--muted-foreground)]">
              &copy; {new Date().getFullYear()} देवा बहुउद्देशीय संस्था, पुसद. All rights reserved.
            </p>
            <p className="text-xs text-[var(--muted-foreground)] mt-2 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-[var(--accent)] fill-current" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
