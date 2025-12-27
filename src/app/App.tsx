import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import JobsPage from './pages/JobsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CommunityServicePage from './pages/CommunityServicePage';
import HealthServicesPage from './pages/HealthServicesPage';
import GovernmentExamsPage from './pages/GovernmentExamsPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Primary Orb */}
          <div 
            className="bg-orb animate-orb"
            style={{
              width: '600px',
              height: '600px',
              background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.4) 0%, rgba(34, 211, 238, 0.3) 100%)',
              top: '-200px',
              right: '-200px',
              animationDelay: '0s',
            }}
          />
          {/* Secondary Orb */}
          <div 
            className="bg-orb animate-orb"
            style={{
              width: '500px',
              height: '500px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(167, 139, 250, 0.2) 100%)',
              bottom: '10%',
              left: '-150px',
              animationDelay: '-5s',
            }}
          />
          {/* Accent Orb */}
          <div 
            className="bg-orb animate-orb"
            style={{
              width: '400px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(52, 211, 153, 0.2) 100%)',
              top: '40%',
              right: '-100px',
              animationDelay: '-10s',
            }}
          />
          {/* Pink/Rose Orb */}
          <div 
            className="bg-orb animate-orb"
            style={{
              width: '350px',
              height: '350px',
              background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(251, 113, 133, 0.15) 100%)',
              bottom: '-100px',
              right: '30%',
              animationDelay: '-15s',
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/education/:level" element={<EducationPage />} />
              <Route path="/community-service" element={<CommunityServicePage />} />
              <Route path="/health-services" element={<HealthServicesPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/government-exams" element={<GovernmentExamsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
