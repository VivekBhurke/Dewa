import { useState } from 'react';
import { Target, Eye, Heart, Award, Users, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import DonationModal from '../components/DonationModal';

export default function AboutPage() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const founders = [
    {
      name: "Dr. Laxman Wamanrao Bhurke",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjY1NTM3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      role: "President & Founder",
      description: "Visionary leader with over 10 years of experience in social welfare"
    },
    {
      name: "Mr. Chandrabhan Shivaji Bhurke",
      image: "https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjB3b3JrfGVufDF8fHx8MTc2NjU4ODEyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      role: "Vice President & Co-Founder",
      description: "Passionate about education and community development"
    }
  ];

  const achievements = [
    { number: "5000+", label: "People Served", icon: <Users className="w-8 h-8" />, color: "var(--primary)" },
    { number: "50+", label: "Health Camps", icon: <Heart className="w-8 h-8" />, color: "var(--accent)" },
    { number: "1000+", label: "Students Supported", icon: <Award className="w-8 h-8" />, color: "var(--secondary)" },
    { number: "25+", label: "Villages Covered", icon: <Target className="w-8 h-8" />, color: "var(--success)" }
  ];

  return (
    <div className="relative">
      {/* Donation Modal */}
      <DonationModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)} 
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--success)] opacity-90" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-60 h-60 bg-white/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-white/90 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Our Journey</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            देवा बहुउद्देशीय संस्था, पुसद - Committed to building a healthier, educated, and empowered community.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="glass-card-strong p-8 hover:bg-white/50 transition-all duration-300 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-[var(--primary)]" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Our Mission</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
                To provide accessible healthcare, quality education, and social welfare services to underserved communities. 
                We aim to create lasting positive change by empowering individuals and families through comprehensive support programs.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card-strong p-8 hover:bg-white/50 transition-all duration-300 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/5 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-10 h-10 text-[var(--secondary)]" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Our Vision</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
                A society where every individual has access to quality healthcare, education, and opportunities for growth. 
                We envision communities that are healthy, educated, and self-sufficient, where no one is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History/Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Story</h2>
              <p className="text-[var(--muted-foreground)]">The journey that shaped our mission</p>
            </div>
            
            <div className="glass-card p-8 md:p-12">
              <div className="space-y-6 text-[var(--muted-foreground)] leading-relaxed text-lg">
                <p>
                  <span className="text-[var(--primary)] font-bold text-2xl">देवा बहुउद्देशीय संस्था, पुसद</span> was founded with a vision to address the critical needs of underserved communities 
                  in the Yavatmal region. Recognizing the gaps in healthcare, education, and social welfare services, our founders 
                  came together to create an organization that could make a real difference in people's lives.
                </p>
                <p>
                  Starting with small health camps and educational support programs, we have grown into a comprehensive organization 
                  serving thousands of individuals across multiple villages. Our journey has been guided by the principle that every 
                  person deserves access to basic necessities and opportunities for growth.
                </p>
                <p>
                  Today, we continue to expand our reach and impact, working tirelessly to build healthier, more educated, and 
                  prosperous communities. Through the dedication of our team, the support of our volunteers, and the trust of the 
                  communities we serve, we are creating lasting positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Impact</h2>
            <p className="text-[var(--muted-foreground)]">Numbers that reflect our commitment</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center hover:bg-white/50 transition-all duration-300 hover:scale-105 group"
              >
                <div 
                  className="p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${achievement.color}20` }}
                >
                  <div style={{ color: achievement.color }}>
                    {achievement.icon}
                  </div>
                </div>
                <p className="text-4xl font-bold mb-2 gradient-text">{achievement.number}</p>
                <p className="text-[var(--muted-foreground)]">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Meet Our Founders</h2>
            <p className="text-[var(--muted-foreground)]">The visionaries behind our mission</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="glass-card-strong overflow-hidden group hover:bg-white/50 transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">{founder.name}</h3>
                  <p className="text-[var(--primary)] font-medium mb-4">{founder.role}</p>
                  <p className="text-[var(--muted-foreground)]">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values/Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Core Values</h2>
            <p className="text-[var(--muted-foreground)]">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:bg-white/50 transition-all duration-300 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Compassion</h3>
              <p className="text-[var(--muted-foreground)]">
                We approach every situation with empathy and understanding, treating everyone with dignity and respect.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center hover:bg-white/50 transition-all duration-300 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/5 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-[var(--secondary)]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Excellence</h3>
              <p className="text-[var(--muted-foreground)]">
                We strive for the highest quality in everything we do, continuously improving our services and impact.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center hover:bg-white/50 transition-all duration-300 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--success)]/20 to-[var(--success)]/5 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-[var(--success)]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Community</h3>
              <p className="text-[var(--muted-foreground)]">
                We believe in the power of community and work collaboratively to create sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--success)]" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            </div>
            
            <div className="relative z-10 py-16 px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Us in Making a Difference</h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
                Whether through volunteering, donations, or spreading awareness, you can be part of our mission to transform lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 rounded-2xl glass-card text-white font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Volunteer With Us
                </button>
                <button 
                  onClick={() => setIsDonateModalOpen(true)}
                  className="group px-8 py-4 rounded-2xl bg-white text-[var(--primary)] font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Donate Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
