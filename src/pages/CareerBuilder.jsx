import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import {
  BookOpen,
  Home as HomeIcon,
  User as UserIcon,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  FileText as FileTextIcon,
  ExternalLink,
} from 'lucide-react';

export default function CareerBuilder() {
  const navigate = useNavigate();
  const { user } = useUser();

  const M = {
    primary: '#6B9080',
    secondary: '#A4C3B2',
    bg1: '#F6FFF8',
    bg2: '#EAF4F4',
    bg3: '#E8F3E8',
    text: '#2C3E3F',
    muted: '#5A7A6B',
  };

  /* ================= COMPONENTS ================= */

  const Header = () => (
    <header className="px-6 py-4 flex items-center justify-between shadow-lg"
      style={{ background: `linear-gradient(90deg, ${M.primary}, ${M.secondary})` }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
          <BookOpen className="w-6 h-6" style={{ color: M.primary }} />
        </div>
        <span className="text-white text-xl font-bold">Mentora</span>
      </div>

      <nav className="flex items-center gap-4">
        <button onClick={() => navigate('/study-planner')} className="text-white font-medium hover:bg-white/20 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hidden md:block">Study Planner</button>
        <button onClick={() => navigate('/career-builder')} className="text-white font-medium hover:bg-white/20 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hidden md:block">Career Builder</button>
        <button onClick={() => navigate('/dashboard')} className="text-white font-medium hover:bg-white/20 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hidden md:block">Dashboard</button>
        <button onClick={() => navigate('/profile')} className="text-white hover:bg-white/20 transition-all duration-300 p-2 rounded-lg">
          <img src={user.avatar} alt="Profile" className="w-6 h-6 rounded-full" />
        </button>
      </nav>
    </header>
  );

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
      <div className="flex justify-around items-center py-3">
        <button onClick={() => navigate('/')} className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all text-[#5A7A6B]`}>
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button onClick={() => navigate('/career-builder')} className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all text-[#5A7A6B]`}>
          <BookOpen className="w-6 h-6" />
          <span className="text-xs font-medium">Career</span>
        </button>

        <button onClick={() => navigate('/dashboard')} className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all text-[#5A7A6B]`}>
          <LayoutDashboard className="w-6 h-6" />
          <span className="text-xs font-medium">Dashboard</span>
        </button>

        <button onClick={() => navigate('/profile')} className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all text-[#5A7A6B]`}>
          <UserIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </div>
  );

  /* ================= MAIN VIEW ================= */

  return (
    <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
      <Header />
      <main className="container mx-auto px-4 mt-6">
        {/* Welcome Section with Button */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border mb-6 text-center" style={{ borderColor: M.bg3 }}>
          <h1 className="text-3xl font-bold mb-4" style={{ color: M.text }}>Welcome to Career Builder</h1>
          <p className="text-lg mb-6" style={{ color: M.muted }}>
            Start your career journey with our comprehensive assessment and resources
          </p>
          <button
            onClick={() => navigate('/create-career-builder')}
            className="px-8 py-4 rounded-lg text-white font-medium hover:shadow-lg transition-all text-lg"
            style={{ background: M.primary }}
          >
            Start Career Assessment
          </button>
        </div>

        {/* Career Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Career Writing Tips */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border" style={{ borderColor: M.bg3 }}>
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6" style={{ color: M.primary }} />
              <h3 className="text-xl font-bold" style={{ color: M.text }}>Career Writing Tips</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Tailor your resume for each job application
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Use action verbs to describe your achievements
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Quantify your accomplishments with numbers
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Keep your resume to one page for entry-level positions
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Include relevant keywords from the job description
              </li>
            </ul>
          </div>

          {/* Career Checklist */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border" style={{ borderColor: M.bg3 }}>
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-6 h-6" style={{ color: M.primary }} />
              <h3 className="text-xl font-bold" style={{ color: M.text }}>Career Checklist</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Complete your professional profile on LinkedIn
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Build a portfolio website or GitHub repository
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Network with professionals in your field
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Take relevant online courses or certifications
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Gain practical experience through projects or volunteering
              </li>
            </ul>
          </div>

          {/* Cover Letter Guidance */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border" style={{ borderColor: M.bg3 }}>
            <div className="flex items-center gap-3 mb-4">
              <FileTextIcon className="w-6 h-6" style={{ color: M.primary }} />
              <h3 className="text-xl font-bold" style={{ color: M.text }}>Cover Letter Guidance</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Address the hiring manager by name when possible
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Explain why you're interested in the specific company
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Highlight relevant experience and achievements
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Show how your skills match the job requirements
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: M.muted }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: M.primary }} />
                Keep it to 3-4 paragraphs
              </li>
            </ul>
          </div>

          {/* Career Resources */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border" style={{ borderColor: M.bg3 }}>
            <div className="flex items-center gap-3 mb-4">
              <ExternalLink className="w-6 h-6" style={{ color: M.primary }} />
              <h3 className="text-xl font-bold" style={{ color: M.text }}>Career Resources</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <a href="https://www.linkedin.com/learning" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg border hover:shadow-md transition-all" style={{ borderColor: M.bg3, color: M.text }}>
                <ExternalLink className="w-4 h-4" style={{ color: M.primary }} />
                <span className="font-medium text-sm">LinkedIn Learning</span>
              </a>
              <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg border hover:shadow-md transition-all" style={{ borderColor: M.bg3, color: M.text }}>
                <ExternalLink className="w-4 h-4" style={{ color: M.primary }} />
                <span className="font-medium text-sm">Coursera</span>
              </a>
              <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg border hover:shadow-md transition-all" style={{ borderColor: M.bg3, color: M.text }}>
                <ExternalLink className="w-4 h-4" style={{ color: M.primary }} />
                <span className="font-medium text-sm">Udemy</span>
              </a>
              <a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg border hover:shadow-md transition-all" style={{ borderColor: M.bg3, color: M.text }}>
                <ExternalLink className="w-4 h-4" style={{ color: M.primary }} />
                <span className="font-medium text-sm">Glassdoor</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
