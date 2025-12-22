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
} from 'lucide-react';

export default function CareerProgress() {
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
  const [progressData, setProgressData] = useState({
    careerTimeline: [
      {
        stage: 'Learning Phase',
        completed: true
      },
      {
        stage: 'Training Phase',
        completed: true
      },
      {
        stage: 'Employment Phase',
        completed: false
      }
    ],
    skillsProgress: {
      technical: 70,
      soft: 60,
    },
    goals: [
      {
        id: 1,
        title: 'Complete React Certification',
        progress: 80,
        deadline: '2024-06-30',
        status: 'In Progress',
      },
      {
        id: 2,
        title: 'Build Portfolio Project',
        progress: 45,
        deadline: '2024-08-15',
        status: 'In Progress',
      },
      {
        id: 3,
        title: 'Network with 5 Professionals',
        progress: 100,
        deadline: '2024-05-01',
        status: 'Completed',
      },
    ],
    achievements: [
      'Completed 3 online courses',
      'Built 2 portfolio projects',
      'Attended 2 networking events',
      'Gained 6 months of experience',
    ],
  });

  // Calculate overall progress based on stages, skills, and goals
  const calculateOverallProgress = () => {
    const stagesCompleted = progressData.careerTimeline.filter(stage => stage.completed).length;
    const totalStages = progressData.careerTimeline.length;
    const stagesProgress = (stagesCompleted / totalStages) * 100;

    const skillsAverage = (progressData.skillsProgress.technical + progressData.skillsProgress.soft) / 2;

    const goalsCompleted = progressData.goals.filter(goal => goal.status === 'Completed').length;
    const totalGoals = progressData.goals.length;
    const goalsProgress = (goalsCompleted / totalGoals) * 100;

    return Math.round((stagesProgress + skillsAverage + goalsProgress) / 3);
  };

  const overallProgress = calculateOverallProgress();

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

  const ProgressBar = ({ progress, label }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: M.text }}>{label}</span>
        <span className="text-sm" style={{ color: M.muted }}>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, background: M.primary }}
        ></div>
      </div>
    </div>
  );

  return (
    <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
      <Header />
      <main className="container mx-auto px-4 mt-6">
        {/* Overall Progress */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: M.text }}>Career Progress Overview</h2>
          <div className="text-center mb-6">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={M.primary}
                  strokeWidth="2"
                  strokeDasharray={`${overallProgress}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{ color: M.text }}>{overallProgress}%</span>
              </div>
            </div>
            <p className="text-sm" style={{ color: M.muted }}>Overall Career Progress</p>
          </div>
          <ProgressBar progress={progressData.skillsProgress.technical} label="Technical Skills" />
          <ProgressBar progress={progressData.skillsProgress.soft} label="Soft Skills" />
        </div>

        {/* Goals Tracking */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: M.text }}>Goals Tracking</h2>
          <div className="space-y-4">
            {progressData.goals.map((goal) => (
              <div key={goal.id} className="border rounded-lg p-4" style={{ borderColor: M.bg3 }}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold" style={{ color: M.text }}>{goal.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    goal.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {goal.status}
                  </span>
                </div>
                <ProgressBar progress={goal.progress} label="" />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm" style={{ color: M.muted }}>Deadline: {goal.deadline}</span>
                  <span className="text-sm font-medium" style={{ color: M.primary }}>{goal.progress}% Complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: M.text }}>Recent Achievements</h2>
          <div className="grid gap-4">
            {progressData.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <Trophy className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium text-green-800">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/create-career-builder')}
            className="px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all"
            style={{ background: M.primary }}
          >
            Update Goals
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
