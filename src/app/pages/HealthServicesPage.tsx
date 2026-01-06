import { Heart, Stethoscope, Users, Calendar, Phone, Mail, Sparkles, Clock, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export default function HealthServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultant: '',
    date: '',
    message: ''
  });

  const healthServices = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Free Health Camps",
      description: "Regular health checkup camps in rural and urban areas providing free medical consultation and basic tests.",
      color: "var(--accent)"
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: "Medical Consultation",
      description: "Expert consultation by qualified doctors including general physicians and specialists.",
      color: "var(--primary)"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Physiotherapy Services",
      description: "Specialized physiotherapy services for rehabilitation and pain management.",
      color: "var(--success)"
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Health Awareness Programs",
      description: "Educational programs on health, hygiene, nutrition, and disease prevention.",
      color: "var(--secondary)"
    }
  ];

  const consultants = [
    {
      name: "Dr. Archana Laxman Bhurke",
      qualification: "BMS (Bachelor of Medical Science)",
      specialization: "General Medicine",
      image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NjU4ODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      experience: "10+ years",
      availability: "Mon, Wed, Fri - 10 AM to 2 PM",
      color: "var(--primary)"
    },
    {
      name: "Dr. Vijaya Kisanrao Bhurke",
      qualification: "BPT (Bachelor of Physiotherapy)",
      specialization: "Physiotherapist",
      image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NjU4ODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      experience: "8+ years",
      availability: "Tue, Thu, Sat - 9 AM to 1 PM",
      color: "var(--secondary)"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      consultant: '',
      date: '',
      message: ''
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] opacity-90" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-60 h-60 bg-white/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-white/90 text-sm">
            <Heart className="w-4 h-4" />
            <span>Healthcare for All</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg">Health Services</h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            Committed to providing quality healthcare services to all. Our expert medical professionals 
            are dedicated to serving the community with compassion and excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Health Services</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">Comprehensive healthcare solutions for your well-being</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthServices.map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center hover:bg-white/50 transition-all duration-300 hover:scale-105 group"
              >
                <div 
                  className="p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <div style={{ color: service.color }}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{service.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Consultants */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Medical Consultants</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">Expert doctors dedicated to your health</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultants.map((consultant, index) => (
              <div key={index} className="glass-card-strong overflow-hidden hover:bg-white/50 transition-all duration-300 group">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <ImageWithFallback
                      src={consultant.image}
                      alt={consultant.name}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">{consultant.name}</h3>
                    <p className="font-medium mb-4" style={{ color: consultant.color }}>{consultant.qualification}</p>
                    <div className="space-y-3 text-[var(--muted-foreground)]">
                      <p className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4" style={{ color: consultant.color }} />
                        <strong>Specialization:</strong> {consultant.specialization}
                      </p>
                      <p className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" style={{ color: consultant.color }} />
                        <strong>Experience:</strong> {consultant.experience}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" style={{ color: consultant.color }} />
                        <strong>Availability:</strong> {consultant.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Book an Appointment</h2>
            <p className="text-[var(--muted-foreground)]">Schedule your consultation with our experts</p>
          </div>
          
          <div className="glass-card-strong p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[var(--foreground)] font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--foreground)] font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[var(--foreground)] font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--foreground)] font-medium mb-2">Select Consultant *</label>
                  <select
                    required
                    aria-label="Select a consultant"
                    value={formData.consultant}
                    onChange={(e) => setFormData({...formData, consultant: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                  >
                    <option value="">Choose a consultant</option>
                    <option value="Dr. Archana Laxman Bhurke">Dr. Archana Laxman Bhurke - BMS</option>
                    <option value="Dr. Vijaya Kisanrao Bhurke">Dr. Vijaya Kisanrao Bhurke - Physiotherapist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[var(--foreground)] font-medium mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                    min={new Date().toISOString().split('T')[0]}
                    placeholder="Select a date"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--foreground)] font-medium mb-2">Message / Symptoms</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)] resize-none"
                  placeholder="Describe your symptoms or reason for consultation"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Submit Appointment Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            </div>
            
            <div className="relative z-10 py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Contact Our Health Department</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="glass-card p-6 flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white/20">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-sm opacity-80">Emergency Helpline</p>
                    <p className="text-xl font-bold">+91 1234567890</p>
                  </div>
                </div>
                <div className="glass-card p-6 flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white/20">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-sm opacity-80">Email Us</p>
                    <p className="text-xl font-bold">devabspusad025@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
