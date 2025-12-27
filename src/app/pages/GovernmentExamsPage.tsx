import { Clock, Bell, BookOpen, FileText, Sparkles, GraduationCap, Target, Award } from 'lucide-react';

export default function GovernmentExamsPage() {
  const examCategories = [
    {
      title: "UPSC Preparation",
      description: "Complete guidance for Civil Services examination",
      icon: <Target className="w-8 h-8" />,
      color: "var(--primary)"
    },
    {
      title: "SSC Exams",
      description: "Staff Selection Commission exam resources",
      icon: <FileText className="w-8 h-8" />,
      color: "var(--secondary)"
    },
    {
      title: "Banking Exams",
      description: "IBPS, SBI and other banking exam preparation",
      icon: <Award className="w-8 h-8" />,
      color: "var(--success)"
    },
    {
      title: "State PSC",
      description: "State Public Service Commission exam details",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "var(--accent)"
    }
  ];

  const features = [
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Exam Notifications",
      description: "Latest government exam announcements and updates",
      color: "var(--primary)"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Study Materials",
      description: "Free study resources and preparation guides",
      color: "var(--success)"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Mock Tests",
      description: "Practice tests and previous year papers",
      color: "var(--secondary)"
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
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-white/90 text-sm">
            <GraduationCap className="w-4 h-4" />
            <span>Prepare for Success</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow-lg">Government Exams</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Comprehensive guidance and resources for various government competitive examinations
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card-strong p-12 text-center">
            <div className="relative inline-block mb-8">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[var(--success)]/20 to-[var(--primary)]/20">
                <Clock className="w-24 h-24 text-[var(--success)] animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-[var(--success)]/20 rounded-full blur-2xl animate-ping opacity-50" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Coming Soon</h2>
            <p className="text-xl text-[var(--muted-foreground)] mb-12 max-w-2xl mx-auto">
              We are working hard to bring you comprehensive information about government exams, 
              study materials, exam schedules, and preparation guidance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 hover:bg-white/40 transition-all duration-300 group"
                >
                  <div 
                    className="p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <div style={{ color: feature.color }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">{feature.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[var(--foreground)] mb-6 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--secondary)]" />
                Stay updated! Subscribe to our newsletter for launch notifications.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl glass-input text-[var(--foreground)]"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--success)] to-[var(--primary)] text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Thank you! We will notify you when this section is available.');
                  }}
                >
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--success)] via-[var(--primary)] to-[var(--secondary)]" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            </div>
            
            <div className="relative z-10 py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {examCategories.map((category, index) => (
                  <div 
                    key={index} 
                    className="glass-card p-6 hover:bg-white/30 transition-all duration-300 group"
                  >
                    <div 
                      className="p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{category.title}</h3>
                    <p className="text-sm text-white/80">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
