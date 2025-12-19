import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  Target,
  TrendingUp,
  BookOpen,
  Users,
  Award,
  ChevronRight,
  Home as HomeIcon,
  LayoutDashboard,
  User as UserIcon,
} from 'lucide-react';

export default function CareerBuilder() {
  const navigate = useNavigate();

  // Theme colors
  const M = {
    primary: '#6B9080',
    secondary: '#A4C3B2',
    bg1: '#F6FFF8',
    bg2: '#EAF4F4',
    bg3: '#E8F3E8',
    text: '#2C3E3F',
    muted: '#5A7A6B',
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [careerData, setCareerData] = useState({
    interests: [],
    skills: [],
    goals: '',
    experience: '',
    industry: '',
  });

  const steps = [
    {
      title: 'Career Interests',
      description: 'What fields interest you?',
      options: [
        'Technology & Software',
        'Healthcare & Medicine',
        'Business & Finance',
        'Education & Teaching',
        'Creative Arts & Design',
        'Engineering & Manufacturing',
        'Science & Research',
        'Marketing & Communications'
      ]
    },
    {
      title: 'Skills Assessment',
      description: 'What skills do you have?',
      options: [
        'Programming & Coding',
        'Data Analysis',
        'Project Management',
        'Communication',
        'Leadership',
        'Problem Solving',
        'Creativity',
        'Technical Writing'
      ]
    },
    {
      title: 'Career Goals',
      description: 'What are your career aspirations?',
      type: 'textarea',
      placeholder: 'Describe your short-term and long-term career goals...'
    },
    {
      title: 'Experience Level',
      description: 'How much experience do you have?',
      options: [
        'Entry Level (0-2 years)',
        'Mid Level (3-5 years)',
        'Senior Level (6-10 years)',
        'Executive Level (10+ years)'
      ]
    },
    {
      title: 'Industry Preference',
      description: 'Which industry appeals to you most?',
      options: [
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Manufacturing',
        'Retail',
        'Government',
        'Non-profit'
      ]
    }
  ];

  const handleOptionSelect = (stepIndex, option) => {
    if (stepIndex === 0) {
      setCareerData(prev => ({
        ...prev,
        interests: prev.interests.includes(option)
          ? prev.interests.filter(i => i !== option)
          : [...prev.interests, option]
      }));
    } else if (stepIndex === 1) {
      setCareerData(prev => ({
        ...prev,
        skills: prev.skills.includes(option)
          ? prev.skills.filter(s => s !== option)
          : [...prev.skills, option]
      }));
    } else if (stepIndex === 3) {
      setCareerData(prev => ({ ...prev, experience: option }));
    } else if (stepIndex === 4) {
      setCareerData(prev => ({ ...prev, industry: option }));
    }
  };

  const handleTextInput = (value) => {
    setCareerData(prev => ({ ...prev, goals: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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

  const Header = () => (
    <header className="px-6 py-4 flex items-center justify-between shadow-lg"
      style={{ background: `linear-gradient(90deg, ${M.primary}, ${M.secondary})` }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
          <Briefcase className="w-6 h-6" style={{ color: M.primary }} />
        </div>
        <span className="text-white text-xl font-bold">Mentora</span>
      </div>

      <nav className="flex items-center gap-4">
        <button onClick={() => navigate('/')} className="text-white font-medium hover:underline hidden md:block">Home</button>
        <button onClick={() => navigate('/career-builder')} className="text-white font-medium hover:underline hidden md:block">Career Builder</button>
        <button onClick={() => navigate('/profile')} className="text-white font-medium hover:underline hidden md:block flex items-center gap-1">
          <UserIcon className="w-4 h-4" />
          Profile
        </button>
      </nav>
    </header>
  );

  const currentStepData = steps[currentStep];

  return (
    <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
      <Header />
      <main className="container mx-auto px-4 mt-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
          <h1 className="text-3xl font-bold text-[#2C3E3F] mb-2 flex items-center gap-3">
            <Briefcase className="w-8 h-8" style={{ color: M.primary }} />
            Career Builder
          </h1>
          <p className="text-[#5A7A6B]">Build your career path with personalized guidance</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: M.bg3 }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#2C3E3F]">{currentStepData.title}</h2>
              <p className="text-[#5A7A6B]">{currentStepData.description}</p>
            </div>
            <span className="text-sm text-[#5A7A6B]">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%`, background: M.primary }}
            ></div>
          </div>

          {currentStepData.type === 'textarea' ? (
            <textarea
              value={careerData.goals}
              onChange={(e) => handleTextInput(e.target.value)}
              placeholder={currentStepData.placeholder}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6B9080] resize-none"
              style={{ borderColor: M.bg3 }}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentStepData.options.map((option, index) => {
                const isSelected = currentStep === 0
                  ? careerData.interests.includes(option)
                  : currentStep === 1
                  ? careerData.skills.includes(option)
                  : currentStep === 3
                  ? careerData.experience === option
                  : careerData.industry === option;

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(currentStep, option)}
                    className={`p-4 rounded-lg border text-left transition-all hover:shadow-md ${
                      isSelected ? 'border-[#6B9080] bg-[#F6FFF8]' : 'border-gray-200 hover:border-[#6B9080]'
                    }`}
                  >
                    <span className={`font-medium ${isSelected ? 'text-[#6B9080]' : 'text-[#2C3E3F]'}`}>
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'text-white hover:shadow-lg'
              }`}
              style={currentStep === 0 ? {} : { background: M.secondary }}
            >
              Previous
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={() => alert('Career plan generated! Check your dashboard for recommendations.')}
                className="px-8 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center gap-2"
                style={{ background: M.primary }}
              >
                Generate Career Plan
                <Award className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center gap-2"
                style={{ background: M.primary }}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
