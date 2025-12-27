import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Briefcase, Building2, Calendar, MapPin, ExternalLink, Bell, Sparkles, Search } from 'lucide-react';

export default function JobsPage() {
  const [searchParams] = useSearchParams();
  const jobType = searchParams.get('type') || 'private';
  const [activeType, setActiveType] = useState<'private' | 'government'>(jobType as 'private' | 'government');

  const privateJobs = [
    {
      title: "Software Developer",
      company: "Tech Solutions Pvt Ltd",
      location: "Mumbai, Maharashtra",
      eligibility: "B.Tech/MCA",
      lastDate: "31 December 2024",
      applyLink: "#"
    },
    {
      title: "Marketing Executive",
      company: "Digital Marketing Co.",
      location: "Pune, Maharashtra",
      eligibility: "MBA/BBA",
      lastDate: "5 January 2025",
      applyLink: "#"
    },
    {
      title: "Accountant",
      company: "Finance Experts Ltd",
      location: "Nagpur, Maharashtra",
      eligibility: "B.Com/M.Com",
      lastDate: "10 January 2025",
      applyLink: "#"
    }
  ];

  const governmentJobs = [
    {
      title: "Junior Engineer (Civil)",
      company: "Public Works Department",
      location: "Maharashtra",
      eligibility: "Diploma/B.E. Civil",
      lastDate: "15 January 2025",
      applyLink: "#"
    },
    {
      title: "Police Constable",
      company: "Maharashtra Police",
      location: "Various Districts",
      eligibility: "12th Pass",
      lastDate: "20 January 2025",
      applyLink: "#"
    },
    {
      title: "Clerk",
      company: "State Bank of India",
      location: "Pan India",
      eligibility: "Graduation",
      lastDate: "25 January 2025",
      applyLink: "#"
    }
  ];

  const jobs = activeType === 'private' ? privateJobs : governmentJobs;

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
            <Briefcase className="w-4 h-4" />
            <span>Find Your Dream Job</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg">Jobs Alert</h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            Stay updated with the latest job opportunities in private and government sectors.
          </p>
        </div>
      </section>

      {/* Job Type Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveType('private')}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeType === 'private'
                  ? 'bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white shadow-lg scale-105'
                  : 'glass-card text-[var(--foreground)] hover:bg-white/40'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Private Jobs
            </button>
            <button
              onClick={() => setActiveType('government')}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeType === 'government'
                  ? 'bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white shadow-lg scale-105'
                  : 'glass-card text-[var(--foreground)] hover:bg-white/40'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Government Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              {activeType === 'private' ? 'Private Sector Jobs' : 'Government Jobs'}
            </h2>
            <div className="hidden md:flex items-center gap-2 text-[var(--muted-foreground)]">
              <Search className="w-5 h-5" />
              <span>{jobs.length} opportunities available</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="glass-card-strong p-6 hover:bg-white/50 transition-all duration-300 hover:scale-[1.01] group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-2xl ${activeType === 'private' ? 'bg-[var(--secondary)]/20' : 'bg-[var(--primary)]/20'} group-hover:scale-110 transition-transform duration-300`}>
                        {activeType === 'private' 
                          ? <Briefcase className="w-6 h-6 text-[var(--secondary)]" />
                          : <Building2 className="w-6 h-6 text-[var(--primary)]" />
                        }
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">{job.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[var(--muted-foreground)]">
                          <p className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-[var(--primary)]" />
                            {job.company}
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[var(--success)]" />
                            {job.location}
                          </p>
                          <p className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[var(--secondary)]" />
                            <strong>Eligibility:</strong> {job.eligibility}
                          </p>
                          <p className="flex items-center gap-2 text-[var(--accent)]">
                            <Calendar className="w-4 h-4" />
                            <strong>Last Date:</strong> {job.lastDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:ml-4">
                    <a
                      href={job.applyLink}
                      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--accent)]" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            </div>
            
            <div className="relative z-10 py-16 px-8 text-center">
              <div className="relative inline-block mb-6">
                <Bell className="w-16 h-16 text-white animate-bounce" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Stay Updated</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
                We regularly update this page with new job opportunities. Check back often or subscribe to get notifications for specific job categories.
              </p>
              <button className="px-8 py-4 rounded-2xl bg-white text-[var(--primary)] font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Subscribe to Job Alerts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
