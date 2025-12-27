import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Play, X, Users, Heart, GraduationCap, Leaf, Sparkles, ArrowRight } from 'lucide-react';

export default function CommunityServicePage() {
  const [selectedMedia, setSelectedMedia] = useState<{type: 'image' | 'video', src: string, title: string, description?: string} | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');

  const stats = [
    { number: "50+", label: "Health Camps Organized", icon: <Heart className="w-6 h-6" />, color: "var(--accent)" },
    { number: "1000+", label: "Students Benefited", icon: <GraduationCap className="w-6 h-6" />, color: "var(--primary)" },
    { number: "25+", label: "Villages Covered", icon: <Leaf className="w-6 h-6" />, color: "var(--success)" },
    { number: "5000+", label: "Lives Impacted", icon: <Users className="w-6 h-6" />, color: "var(--secondary)" }
  ];

  const mediaGallery = [
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1599666882726-fe28581e3147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGhjYXJlJTIwaW5kaWF8ZW58MXx8fHwxNzY2NTg4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Free Health Camp',
      description: 'Providing free health checkups to rural communities',
      category: 'Health'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjY1ODgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Education Support Program',
      description: 'Distributing books and study materials',
      category: 'Education'
    },
    {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Community Cleaning Drive',
      description: 'Sanitation and cleanliness awareness campaign',
      category: 'Environment'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2NjUwMjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Volunteer Training Session',
      description: 'Training community volunteers for social service',
      category: 'Community'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NjU4ODEyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Medical Consultation',
      description: 'Free medical consultation by expert doctors',
      category: 'Health'
    },
    {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Education Awareness Program',
      description: 'Promoting education in rural areas',
      category: 'Education'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjB3b3JrfGVufDF8fHx8MTc2NjU4ODEyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Community Development',
      description: 'Working together for community development',
      category: 'Community'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjY1NTM3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Team Meeting',
      description: 'Planning future community service initiatives',
      category: 'Community'
    },
    {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Health Awareness Workshop',
      description: 'Conducting health awareness workshops',
      category: 'Health'
    }
  ];

  const filteredMedia = activeFilter === 'all' 
    ? mediaGallery 
    : mediaGallery.filter(item => 
        activeFilter === 'photos' ? item.type === 'image' : item.type === 'video'
      );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Health': return 'var(--accent)';
      case 'Education': return 'var(--primary)';
      case 'Environment': return 'var(--success)';
      default: return 'var(--secondary)';
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)] via-[var(--primary)] to-[var(--secondary)] opacity-90" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-60 h-60 bg-white/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-white/90 text-sm">
            <Users className="w-4 h-4" />
            <span>Making a Difference Together</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg">Community Service</h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            Witness our commitment to serving the community through various initiatives. 
            Browse through our photo and video gallery showcasing our work.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center hover:bg-white/50 transition-all duration-300 hover:scale-105 group"
              >
                <div 
                  className="p-3 rounded-2xl w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <div style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold mb-2 gradient-text">{stat.number}</p>
                <p className="text-[var(--muted-foreground)] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Work in Action</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">See the impact of our community service initiatives</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'photos', 'videos'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as typeof activeFilter)}
                className={`px-6 py-3 rounded-2xl font-medium capitalize transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[var(--success)] to-[var(--primary)] text-white shadow-lg'
                    : 'glass-card text-[var(--foreground)] hover:bg-white/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden cursor-pointer group hover:bg-white/40 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  {item.type === 'image' ? (
                    <ImageWithFallback
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-[var(--foreground)]">
                      <ImageWithFallback
                        src={item.src.replace('embed/', 'vi/').replace(/\/.*$/, '/maxresdefault.jpg')}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-10 h-10 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div 
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: getCategoryColor(item.category) }}
                  >
                    {item.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full View */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 p-3 rounded-2xl glass-card hover:bg-white/30 transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <ImageWithFallback
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-auto rounded-2xl"
              />
            ) : (
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={selectedMedia.src}
                  title={selectedMedia.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="glass-card p-6 mt-4">
              <h3 className="text-2xl font-bold mb-2 text-white">{selectedMedia.title}</h3>
              <p className="text-white/80">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--success)] via-[var(--primary)] to-[var(--secondary)]" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            </div>
            
            <div className="relative z-10 py-16 px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Community Service Initiatives</h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
                Be part of the change. Volunteer with us and make a real difference in your community.
              </p>
              <button className="group px-8 py-4 rounded-2xl bg-white text-[var(--primary)] font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto">
                <Users className="w-5 h-5" />
                Become a Volunteer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
