import { useParams } from 'react-router-dom';
import { Book, Award, Users, ArrowRight, GraduationCap, Sparkles, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function EducationPage() {
  const { level } = useParams<{ level: string }>();

  const levelTitles: Record<string, string> = {
    'primary': 'Primary Education',
    'middle': 'Middle School Education',
    'secondary': 'Secondary Education',
    'higher-secondary': 'Higher Secondary Education',
    'college': 'College Education'
  };

  const levelDescriptions: Record<string, string> = {
    'primary': 'Building strong foundations for young minds through quality primary education.',
    'middle': 'Bridging the gap between primary and secondary education with comprehensive learning.',
    'secondary': 'Preparing students for higher education with advanced academic programs.',
    'higher-secondary': 'Specialized streams to shape career paths and higher education goals.',
    'college': 'Supporting students in achieving their higher education dreams.'
  };

  const programs = [
    {
      title: "Free Study Materials",
      description: "Distribution of textbooks, notebooks, and study materials to underprivileged students",
      icon: <Book className="w-8 h-8" />,
      color: "var(--primary)"
    },
    {
      title: "Scholarship Program",
      description: "Financial assistance for meritorious students from economically weaker sections",
      icon: <Award className="w-8 h-8" />,
      color: "var(--secondary)"
    },
    {
      title: "Tutorial Classes",
      description: "Free coaching and mentoring for students preparing for competitive exams",
      icon: <Users className="w-8 h-8" />,
      color: "var(--success)"
    }
  ];

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
            <GraduationCap className="w-4 h-4" />
            <span>Education for All</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg">
            {levelTitles[level || 'primary'] || 'Education Programs'}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            {levelDescriptions[level || 'primary'] || 'Empowering the next generation through quality education and equal opportunities for all.'}
          </p>
        </div>
      </section>

      {/* Education Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card-strong overflow-hidden p-2">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjY1ODgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Education"
                className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Educational Initiatives</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">Programs designed to support students at every step of their educational journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="glass-card p-8 hover:bg-white/50 transition-all duration-300 hover:scale-105 group"
              >
                <div 
                  className="p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${program.color}20` }}
                >
                  <div style={{ color: program.color }}>
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">{program.title}</h3>
                <p className="text-[var(--muted-foreground)]">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card-strong p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--success)]/20 text-[var(--success)] text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  Our Impact
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">Why Choose Our Education Programs?</h2>
                <ul className="space-y-4">
                  {[
                    'Free quality education materials for all students',
                    'Expert mentorship from experienced educators',
                    'Financial support through scholarships',
                    'Career guidance and counseling services',
                    'Access to digital learning resources'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--muted-foreground)]">
                      <div className="p-1 rounded-full bg-[var(--success)]/20 mt-1">
                        <Sparkles className="w-4 h-4 text-[var(--success)]" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)]/30 to-[var(--primary)]/30 rounded-3xl blur-2xl" />
                  <div className="relative grid grid-cols-2 gap-4">
                    <div className="glass-card p-6 text-center">
                      <p className="text-4xl font-bold gradient-text mb-2">1000+</p>
                      <p className="text-[var(--muted-foreground)] text-sm">Students Supported</p>
                    </div>
                    <div className="glass-card p-6 text-center">
                      <p className="text-4xl font-bold gradient-text mb-2">50+</p>
                      <p className="text-[var(--muted-foreground)] text-sm">Scholarships Given</p>
                    </div>
                    <div className="glass-card p-6 text-center">
                      <p className="text-4xl font-bold gradient-text mb-2">25+</p>
                      <p className="text-[var(--muted-foreground)] text-sm">Schools Covered</p>
                    </div>
                    <div className="glass-card p-6 text-center">
                      <p className="text-4xl font-bold gradient-text mb-2">100%</p>
                      <p className="text-[var(--muted-foreground)] text-sm">Free Resources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--success)] via-[var(--primary)] to-[var(--secondary)]" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            </div>
            
            <div className="relative z-10 py-16 px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Support Education for All</h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
                Your contribution can help provide quality education to deserving students. 
                Together, we can build a brighter future.
              </p>
              <button className="group px-8 py-4 rounded-2xl bg-white text-[var(--primary)] font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Get Involved
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
