import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import {
  Target,
  ChevronRight,
  Award,
  CheckSquare,
  BookOpen,
  TrendingUp,
  Clock,
  BookMarked,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Brain,
  Home as HomeIcon,
  User as UserIcon,
  LayoutDashboard,
  FileText,
  Download,
  Lightbulb,
  ListChecks,
  Zap,
  FileText as FileTextIcon,
  ExternalLink,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Clock as ClockIcon,
  Star,
  Code,
  Users,
  Briefcase,
  GraduationCap,
  TrendingUp as TrendingUpIcon,
  Activity,
  PieChart,
  Calendar,
  Trophy,
  X,
  Eye,
} from 'lucide-react';

export default function CareerSkills() {
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

  // Mock data - in real app this would come from API/state
  const [skillsData, setSkillsData] = useState({
    topSkills: [
      {
        name: 'JavaScript/TypeScript',
        type: 'Technical',
        status: 'Achieved',
        priority: 1,
      },
      {
        name: 'React/Vue.js',
        type: 'Technical',
        status: 'Achieved',
        priority: 2,
      },
      {
        name: 'Problem Solving',
        type: 'Soft',
        status: 'Achieved',
        priority: 3,
      },
      {
        name: 'Communication',
        type: 'Soft',
        status: 'In Progress',
        priority: 4,
      },
      {
        name: 'API Development',
        type: 'Technical',
        status: 'Missing',
        priority: 5,
      },
    ],
    allSkills: [
      {
        name: 'JavaScript/TypeScript',
        type: 'Technical',
        status: 'Achieved',
        priority: 1,
      },
      {
        name: 'React/Vue.js',
        type: 'Technical',
        status: 'Achieved',
        priority: 2,
      },
      {
        name: 'Problem Solving',
        type: 'Soft',
        status: 'Achieved',
        priority: 3,
      },
      {
        name: 'Communication',
        type: 'Soft',
        status: 'In Progress',
        priority: 4,
      },
      {
        name: 'API Development',
        type: 'Technical',
        status: 'Missing',
        priority: 5,
      },
      {
        name: 'Database Management',
        type: 'Technical',
        status: 'In Progress',
        priority: 6,
      },
      {
        name: 'Team Collaboration',
        type: 'Soft',
        status: 'Achieved',
        priority: 7,
      },
      {
        name: 'Version Control (Git)',
        type: 'Technical',
        status: 'Achieved',
        priority: 8,
      },
      {
        name: 'Project Management',
        type: 'Soft',
        status: 'Missing',
        priority: 9,
      },
      {
        name: 'Cloud Computing',
        type: 'Technical',
        status: 'Missing',
        priority: 10,
      },
    ],
  });

  const [showAllSkills, setShowAllSkills] = useState(false);

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
        <button onClick={() => navigate('/career-builder')} className="text-white font-medium hover:underline hidden md:block">Career Builder</button>
        <button onClick={() => navigate('/study-planner')} className="text-white font-medium hover:underline hidden md:block">Study Planner</button>
        <button onClick={() => navigate('/profile')} className="text-white hover:underline">
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

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Achieved':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3" />
            Achieved
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
            <Clock className="w-3 h-3" />
            In Progress
          </span>
        );
      case 'Missing':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
            <AlertCircle className="w-3 h-3" />
            Missing
          </span>
        );
      default:
        return null;
    }
  };

  const displayedSkills = showAllSkills ? skillsData.allSkills : skillsData.topSkills;

  return (
    <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
      <Header />
      <main className="container mx-auto px-4 mt-6">
        {/* Skills Overview */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: M.text }}>Career Skills Analysis</h2>
          <p className="text-sm mb-6" style={{ color: M.muted }}>
            Based on AI analysis of your career path, here are the most important skills you need to develop.
          </p>

          {/* Top 5 Skills */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: M.text }}>
              <Star className="w-5 h-5" style={{ color: M.primary }} />
              Top 5 Skills
            </h3>
            <div className="space-y-3">
              {displayedSkills.map((skill, index) => (
                <div key={skill.name} className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: M.bg3 }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: M.primary, color: 'white' }}>
                      {skill.priority}
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: M.text }}>{skill.name}</h4>
                      <span className="text-xs" style={{ color: M.muted }}>{skill.type}</span>
                    </div>
                  </div>
                  {getStatusBadge(skill.status)}
                </div>
              ))}
            </div>
          </div>

          {/* View All Skills Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all"
              style={{ background: M.primary }}
            >
              <Eye className="w-4 h-4" />
              {showAllSkills ? 'Show Top 5 Skills' : 'View All Skills'}
            </button>
          </div>
        </div>

        {/* Skills Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg border text-center" style={{ borderColor: M.bg3 }}>
            <div className="text-3xl font-bold mb-2" style={{ color: M.primary }}>
              {skillsData.allSkills.filter(skill => skill.status === 'Achieved').length}
            </div>
            <p className="text-sm" style={{ color: M.muted }}>Skills Achieved</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-lg border text-center" style={{ borderColor: M.bg3 }}>
            <div className="text-3xl font-bold mb-2" style={{ color: M.primary }}>
              {skillsData.allSkills.filter(skill => skill.status === 'In Progress').length}
            </div>
            <p className="text-sm" style={{ color: M.muted }}>In Progress</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-lg border text-center" style={{ borderColor: M.bg3 }}>
            <div className="text-3xl font-bold mb-2" style={{ color: M.primary }}>
              {skillsData.allSkills.filter(skill => skill.status === 'Missing').length}
            </div>
            <p className="text-sm" style={{ color: M.muted }}>Skills Missing</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/create-career-builder')}
            className="px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all"
            style={{ background: M.primary }}
          >
            Update Skills Assessment
          </button>
          <button
            onClick={() => navigate('/career-builder')}
            className="px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all"
            style={{ background: M.secondary }}
          >
            Back to Career Builder
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
