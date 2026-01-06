import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Users, ChevronLeft, ChevronRight, Calendar, Sparkles, ArrowRight, QrCode } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import DonationModal from '../components/DonationModal';

export default function HomePage() {
  const [currentProgram, setCurrentProgram] = useState(0);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'previous'>('upcoming');
  const [isPaused, setIsPaused] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const UPI_ID = "7083967973@upi";

  // Sample program data
  const programs = [
    {
      title: "Health Awareness Camp",
      description: "Free health checkup and awareness program for rural communities",
      image: "https://images.unsplash.com/photo-1599666882726-fe28581e3147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGhjYXJlJTIwaW5kaWF8ZW58MXx8fHwxNzY2NTg4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "15 January 2025",
      location: "Pusad, Yavatmal"
    },
    {
      title: "Education Support Program",
      description: "Providing books and study materials to underprivileged students",
      image: "https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjY1ODgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "20 January 2025",
      location: "Multiple Villages"
    },
    {
      title: "Community Service Drive",
      description: "Cleanliness and sanitation awareness campaign",
      image: "https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2NjUwMjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "25 January 2025",
      location: "Pusad District"
    }
  ];

  const events = {
    upcoming: [
      { title: "Free Medical Camp", date: "28 December 2024", location: "Pusad" },
      { title: "Scholarship Distribution", date: "5 January 2025", location: "Regional Office" },
      { title: "Health Workshop", date: "10 January 2025", location: "Community Hall" }
    ],
    previous: [
      { title: "Annual Health Camp 2024", date: "15 October 2024", location: "Pusad" },
      { title: "Education Fair", date: "20 September 2024", location: "District Center" },
      { title: "Community Cleaning Drive", date: "2 September 2024", location: "Multiple Locations" }
    ]
  };

  const team = [
    {
      name: "Dr. Laxman Wamanrao Bhurke",
      role: "President",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjY1NTM3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Leading community welfare initiatives since 2015"
    },
    {
      name: "Mr. Chandrabhan Shivaji Bhurke",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjB3b3JrfGVufDF8fHx8MTc2NjU4ODEyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Dedicated to education and healthcare programs"
    },
    {
      name: "Mr. Kisan Wamanrao Bhurke",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjY1NTM3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Managing operations and community outreach"
    },
    {
      name: "Mr. Nandkumar Wamanrao Bhurke",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjB3b3JrfGVufDF8fHx8MTc2NjU4ODEyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Financial management and resource allocation"
    },
    {
      name: "Mr. Vijay Khanduji Kale",
      role: "Member",
      image: "",
      description: "Event coordination and fieldwork supervision"
    },
    {
      name: "Mr. Rukhmaji Baliram Waykule",
      role: "Member",
      image: "",
      description: "Event coordination and fieldwork supervision"
    },
    {
      name: "Mr. Bhagwan Vitthal Markad",
      role: "Member",
      image: "",
      description: "Event coordination and fieldwork supervision"
    }
  ];

  // Duplicate team array for infinite scroll effect
  const duplicatedTeam = [...team, ...team];

  const nextProgram = () => {
    setCurrentProgram((prev) => (prev + 1) % programs.length);
  };

  const prevProgram = () => {
    setCurrentProgram((prev) => (prev - 1 + programs.length) % programs.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextProgram();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const announcements = [
    {
      title: "Free Medical Camp",
      date: "07 January 2026",
      location: "Harshi"
    },
    {
      title: "Free Eye Test",
      date: "07 January 2026",
      location: "Harshi"
    },
    {
      title: "Free Consultancy",
      date: "07 January 2026",
      location: "Harshi"
    }
  ];
  return (
    <div className="relative">
      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Hero Background Gradient */}
        <div className="absolute inset-0 hero-gradient opacity-90" />

        {/* Glass Overlay Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-white/90 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Serving the community with love</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white font-bold text-shadow-lg">
            देवा बहुउद्देशीय संस्था
            <span className="block text-2xl md:text-3xl mt-4 font-normal opacity-90">पुसद</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Empowering communities through healthcare, education, and social welfare.
            Committed to building a healthier, more educated, and prosperous society.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDonateModalOpen(true)}
              className="group px-8 py-4 rounded-2xl bg-white text-[var(--primary)] font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Donate Now
            </button>
            <Link
              to="/contact"
              className="group px-8 py-4 rounded-2xl glass-card text-white font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Contact Consultants
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling Announcement Bar */}
      {/* <div className="relative w-full overflow-hidden bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] fade-mask">
        <div
          className="whitespace-nowrap py-3 text-white font-medium text-sm md:text-base animate-scroll"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          <span className="mx-10 font-semibold">
            🙏 Thank you for visiting Deva Bahuuddeshiya Sanstha
          </span>

          {announcements.map((item, index) => (
            <span key={index} className="mx-10">
              📅 {item.title} – {item.date} ({item.location})
            </span>
          ))}
        </div>
      </div> */}
{/* Scrolling Announcement Bar */}
<div
  className="
    relative w-full overflow-hidden fade-mask announcement-bar
    bg-gradient-to-r
    from-[#c75c00]
    via-[#e8892c]
    to-[#b54e00]
  "
>
  <div
    className="whitespace-nowrap py-3 text-white font-medium text-sm md:text-base animate-scroll tracking-wide"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
  >
    
    <span className="inline-block w-20"></span>
    <span className="mx-10 font-semibold">
        Thank you for visiting Deva Bahuuddeshiya Sanstha
    </span>

    {announcements.map((item, index) => (
      <span key={index} className="mx-10 opacity-95">
        {item.title} - {item.date} ({item.location})
      </span>
    ))}
  </div>
</div>




      {/* Programs Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Programs</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">Discover our initiatives that are making a difference in communities</p>
          </div>

          <div className="relative">
            <div className="glass-card-strong overflow-hidden p-2">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={programs[currentProgram].image}
                    alt={programs[currentProgram].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium w-fit mb-4">
                    <Calendar className="w-4 h-4" />
                    {programs[currentProgram].date}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">{programs[currentProgram].title}</h3>
                  <p className="text-[var(--muted-foreground)] mb-6 text-lg">{programs[currentProgram].description}</p>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--success)]" />
                      <strong>Location:</strong> {programs[currentProgram].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevProgram}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-3 rounded-2xl glass-card-strong hover:bg-white/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-[var(--foreground)]" />
            </button>
            <button
              onClick={nextProgram}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-3 rounded-2xl glass-card-strong hover:bg-white/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-[var(--foreground)]" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProgram(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentProgram
                  ? 'w-8 bg-[var(--primary)]'
                  : 'w-2 bg-[var(--muted-foreground)]/30 hover:bg-[var(--muted-foreground)]/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)] via-[var(--primary)] to-[var(--secondary)]" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            </div>

            <div className="relative z-10 py-16 px-8 text-center">
              <div className="relative inline-block mb-6">
                <Heart className="w-16 h-16 text-white animate-pulse" />
                <div className="absolute inset-0 pulse-ring" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Support Our Cause</h2>
              <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                Your contributions help us provide healthcare, education, and community services to those in need.
                Every donation makes a difference in someone's life.
              </p>

              <div className="glass-card max-w-md mx-auto p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <QrCode className="w-5 h-5 text-[var(--primary)]" />
                  <p className="text-[var(--foreground)] font-medium">Donate via UPI</p>
                </div>
                <p className="text-xl font-bold mb-6 text-[var(--primary)] font-mono">{UPI_ID}</p>
                <button
                  onClick={() => setIsDonateModalOpen(true)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--success)] to-[var(--primary)] text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Consultants Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Health Consultants</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">Expert medical professionals dedicated to community health</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Consultant 1 */}
            <div className="glass-card p-6 hover:bg-white/40 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[var(--primary)]/20 group-hover:ring-[var(--primary)]/40 transition-all duration-300">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NjU4ODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Dr. Archana Laxman Bhurke"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-[var(--primary)] text-white">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Dr. Archana Laxman Bhurke</h3>
                <p className="text-[var(--primary)] font-medium mb-2">BMS</p>
                <p className="text-[var(--muted-foreground)] text-sm">Specialized in community health and wellness</p>
              </div>
            </div>

            {/* Consultant 2 */}
            <div className="glass-card p-6 hover:bg-white/40 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[var(--secondary)]/20 group-hover:ring-[var(--secondary)]/40 transition-all duration-300">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NjU4ODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Dr. Vijaya Kisanrao Bhurke"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-[var(--secondary)] text-white">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Dr. Vijaya Kisanrao Bhurke</h3>
                <p className="text-[var(--secondary)] font-medium mb-2">Physiotherapist</p>
                <p className="text-[var(--muted-foreground)] text-sm">Expert in physical rehabilitation and therapy</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto glass-card-strong p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-[var(--foreground)]">Contact for Health Consultation</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Contact Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-[var(--foreground)] font-medium">Health Issue / Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl glass-input text-[var(--foreground)] resize-none"
                  rows={4}
                  placeholder="Describe your health concern"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Events</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">Stay updated with our upcoming and past events</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${activeTab === 'upcoming'
                ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg'
                : 'glass-card text-[var(--foreground)] hover:bg-white/40'
                }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('previous')}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${activeTab === 'previous'
                ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg'
                : 'glass-card text-[var(--foreground)] hover:bg-white/40'
                }`}
            >
              Previous Events
            </button>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {events[activeTab].map((event, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:bg-white/40 transition-all duration-300 hover:scale-[1.02] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{event.title}</h3>
                <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Team</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">Meet the dedicated people behind our mission</p>
          </div>

          {/* Animated Scrolling Team */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll hover:pause">
              {duplicatedTeam.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 glass-card p-6 transition-all duration-300 hover:scale-110 hover:bg-white/50 hover:shadow-xl hover:z-10"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white/50 flex-shrink-0">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--foreground)]">{member.name}</h3>
                      <p className="text-[var(--primary)] font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-[var(--muted-foreground)] italic text-sm">"{member.description}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          .hover\\:pause:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </div>
  );
}
