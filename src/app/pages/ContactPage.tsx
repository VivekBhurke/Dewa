import { Facebook, Instagram, Mail, MapPin, Phone, Send, Sparkles, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)] via-[var(--primary)] to-[var(--accent)] opacity-90" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-60 h-60 bg-white/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-white/90 text-sm">
            <MessageCircle className="w-4 h-4" />
            <span>We'd love to hear from you</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            Get in touch with us for any inquiries, support, or collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--foreground)]">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="glass-card p-6 flex items-start gap-4 hover:bg-white/40 transition-all duration-300 group">
                  <div className="p-3 rounded-2xl bg-[var(--secondary)]/20 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-[var(--foreground)]">Email</h3>
                    <a 
                      href="mailto:devabspusad025@gmail.com" 
                      className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
                    >
                      devabspusad025@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="glass-card p-6 flex items-start gap-4 hover:bg-white/40 transition-all duration-300 group">
                  <div className="p-3 rounded-2xl bg-[var(--success)]/20 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-[var(--success)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-[var(--foreground)]">Address</h3>
                    <p className="text-[var(--muted-foreground)]">
                      लक्ष्मीनारायण नगर, पुसद जि. यवतमाळ<br />
                      Pusad, Yavatmal, Maharashtra
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6">
                  <h3 className="text-lg font-bold mb-6 text-[var(--foreground)] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[var(--secondary)]" />
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-2xl glass-card hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                    >
                      <Facebook className="w-7 h-7 text-[var(--foreground)] group-hover:text-blue-500 transition-colors" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-2xl glass-card hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-7 h-7 text-[var(--foreground)] group-hover:text-pink-500 transition-colors" />
                    </a>
                    <a
                      href="mailto:devabspusad025@gmail.com"
                      className="group p-4 rounded-2xl glass-card hover:bg-green-500/20 hover:scale-110 transition-all duration-300"
                    >
                      <Mail className="w-7 h-7 text-[var(--foreground)] group-hover:text-green-500 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card-strong p-8">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)] flex items-center gap-2">
                <Send className="w-6 h-6 text-[var(--primary)]" />
                Send Us a Message
              </h2>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Subject *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                    placeholder="Subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Message *</label>
                  <textarea
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)] resize-none"
                    rows={5}
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Find Us</h2>
            <p className="text-[var(--muted-foreground)]">Visit us at our location</p>
          </div>
          
          <div className="glass-card-strong overflow-hidden p-2">
            <div className="rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/10 to-[var(--success)]/10" />
              
              <div className="relative z-10 text-center p-8 glass-card">
                <div className="p-4 rounded-2xl bg-[var(--primary)]/20 w-fit mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-[var(--primary)]" />
                </div>
                <p className="text-[var(--foreground)] font-bold text-xl mb-2">Pusad, Yavatmal</p>
                <p className="text-[var(--muted-foreground)]">Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
