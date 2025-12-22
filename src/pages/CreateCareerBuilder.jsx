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
} from 'lucide-react';

export default function CreateCareerBuilder() {
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

  const questions = [
    {
      id: 'q1',
      question: 'What career field or job role are you most interested in right now?',
      options: [
        'Software Development',
        'Data Science',
        'Marketing',
        'Business Management'
      ]
    },
    {
      id: 'q2',
      question: 'Why does this career appeal to you?',
      options: [
        'High salary potential',
        'Creative freedom',
        'Helping others',
        'Job stability'
      ]
    },
    {
      id: 'q3',
      question: 'Which industries attract you the most?',
      options: [
        'Technology',
        'Healthcare',
        'Finance',
        'Education'
      ]
    },
    {
      id: 'q4',
      question: 'What are your top strengths?',
      options: [
        'Problem-solving',
        'Communication',
        'Creativity',
        'Leadership'
      ]
    },
    {
      id: 'q5',
      question: 'What technical or practical skills do you already have?',
      options: [
        'Programming',
        'Data analysis',
        'Project management',
        'Writing'
      ]
    },
    {
      id: 'q6',
      question: 'Which skills do you need to improve or learn for your ideal career?',
      options: [
        'Advanced programming',
        'Data visualization',
        'Digital marketing',
        'Leadership skills'
      ]
    },
    {
      id: 'q7',
      question: 'List any experience you have (internships, projects, volunteer work, competitions).',
      options: [
        'Internship experience',
        'Personal projects',
        'Volunteer work',
        'Academic projects'
      ]
    },
    {
      id: 'q8',
      question: 'Do you prefer working with people or working alone?',
      options: [
        'Working with people',
        'Working alone',
        'Mix of both',
        'Depends on the task'
      ]
    },
    {
      id: 'q9',
      question: 'Which best describes you: analytical, creative, structured, flexible, or leadership-driven?',
      options: [
        'Analytical',
        'Creative',
        'Structured',
        'Leadership-driven'
      ]
    },
    {
      id: 'q10',
      question: 'Which activities do you enjoy most: problem-solving, building things, research, management, or creativity?',
      options: [
        'Problem-solving',
        'Building things',
        'Research',
        'Management'
      ]
    },
    {
      id: 'q11',
      question: 'How fast do you learn new skills, and what learning style works best for you?',
      options: [
        'Very quickly',
        'Moderately',
        'Slowly but steadily',
        'Need structured guidance'
      ]
    },
    {
      id: 'q12',
      question: 'How do you handle stress, deadlines, and pressure?',
      options: [
        'Thrive under pressure',
        'Manage well with planning',
        'Find it challenging',
        'Need breaks and support'
      ]
    },
    {
      id: 'q13',
      question: 'Where do you see yourself in 2 years and 5 years, and what salary range are you aiming for at the start?',
      options: [
        'Entry-level position',
        'Mid-level position',
        'Senior position',
        'Leadership role'
      ]
    },
    {
      id: 'q14',
      question: 'What is the biggest thing holding you back right now, and how much time per week can you dedicate to career development?',
      options: [
        'Lack of experience',
        'Limited skills',
        'Time constraints',
        'Lack of confidence'
      ]
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const updateAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (answers[questions[currentStep].id]) {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

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

  if (showResult) {
    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: M.text }}>Career Assessment Result</h2>
            <p className="text-lg mb-6" style={{ color: M.muted }}>Based on your answers, here is your career assessment:</p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Career Interests:</h3>
                <p>{answers.q1 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Appealing Factors:</h3>
                <p>{answers.q2 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Industries:</h3>
                <p>{answers.q3 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Strengths:</h3>
                <p>{answers.q4 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Skills:</h3>
                <p>{answers.q5 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Skills to Learn:</h3>
                <p>{answers.q6 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Experience:</h3>
                <p>{answers.q7 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Work Style:</h3>
                <p>{answers.q8 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Personality:</h3>
                <p>{answers.q9 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Activities:</h3>
                <p>{answers.q10 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Learning:</h3>
                <p>{answers.q11 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Stress Handling:</h3>
                <p>{answers.q12 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Goals:</h3>
                <p>{answers.q13 || 'Not specified'}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: M.text }}>Challenges:</h3>
                <p>{answers.q14 || 'Not specified'}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all"
                style={{ background: M.primary }}
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
      <Header />
      <main className="container mx-auto px-4 mt-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold" style={{ color: M.text }}>Career Assessment</h2>
              <span className="text-sm" style={{ color: M.muted }}>
                Question {currentStep + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%`, background: M.primary }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6" style={{ color: M.text }}>
              {currentQuestion.question}
            </h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                    answers[currentQuestion.id] === option
                      ? 'border-[#6B9080] bg-[#F6FFF8]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option}
                    checked={answers[currentQuestion.id] === option}
                    onChange={(e) => updateAnswer(currentQuestion.id, e.target.value)}
                    className="mr-3 text-[#6B9080] focus:ring-[#6B9080]"
                  />
                  <span className="text-lg" style={{ color: M.text }}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'text-white hover:shadow-lg'
              }`}
              style={{ background: currentStep === 0 ? undefined : M.primary }}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                !answers[currentQuestion.id]
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'text-white hover:shadow-lg'
              }`}
              style={{ background: answers[currentQuestion.id] ? M.primary : undefined }}
            >
              {currentStep === questions.length - 1 ? 'Complete Assessment' : 'Next'}
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={resetForm}
            className="px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all"
            style={{ background: M.primary }}
          >
            Reset Assessment
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
