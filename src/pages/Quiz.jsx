import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; // لإدارة حالة المستخدم العامة
import {
  HelpCircle,
  CheckSquare,
  Play,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Home as HomeIcon,
  User as UserIcon,
  LayoutDashboard,
} from 'lucide-react';

export default function StudyPlannerAssessment() {
  const navigate = useNavigate();
  const { user, setUser } = useUser(); // استخدام السياق العام للمستخدم

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

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Quiz state
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: 'Study Plan Assessment',
      description: 'Answer questions to get a personalized study plan',
      questions: 14,
      duration: '10-15 min',
      completed: false,
      score: null
    }
  ]);

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizId, setCurrentQuizId] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [studyPlan, setStudyPlan] = useState(null);

  const quizQuestions = [
    {
      question: "What are your top 3 academic or learning goals for the next 30–90 days?",
      options: [
        "Improve grades in specific subjects",
        "Master new skills for career development",
        "Prepare for upcoming exams/certifications",
        "Develop better study habits",
        "Balance academics with personal life",
        "Build confidence in learning abilities"
      ]
    },
    {
      question: "Which subject or skill do you want to improve the most, and why?",
      options: [
        "Mathematics - foundation for many fields",
        "Programming/Computer Science - high demand career",
        "Languages - communication and cultural understanding",
        "Science subjects - understanding the world",
        "Writing/Communication - essential skill",
        "Business/Management - career advancement"
      ]
    },
    {
      question: "How many hours per day can you realistically study?",
      options: [
        "1-2 hours per day",
        "2-3 hours per day",
        "3-4 hours per day",
        "4-5 hours per day",
        "5-6 hours per day",
        "More than 6 hours per day"
      ]
    },
    {
      question: "At what times of day do you feel most productive?",
      options: [
        "Early morning (5-9 AM)",
        "Late morning (9 AM-12 PM)",
        "Afternoon (12-5 PM)",
        "Evening (5-9 PM)",
        "Night (9 PM-12 AM)",
        "Late night (12 AM-5 AM)"
      ]
    },
    {
      question: "Which days of the week are fully or partially available for studying?",
      options: [
        "Weekdays only (Mon-Fri)",
        "Weekends only (Sat-Sun)",
        "Every day including weekends",
        "3-4 days per week",
        "Only 1-2 days per week",
        "Flexible based on schedule"
      ]
    },
    {
      question: "How do you usually plan your study sessions (if at all)?",
      options: [
        "Detailed weekly schedule with specific times",
        "Daily to-do lists without fixed times",
        "Flexible planning based on energy levels",
        "No formal planning, study when I feel like it",
        "Use apps/tools for planning and tracking",
        "Plan but often change based on circumstances"
      ]
    },
    {
      question: "How do you usually start a study session?",
      options: [
        "Review previous material first",
        "Start with the easiest topics",
        "Jump into the most important/difficult topics",
        "Quick planning of what to cover",
        "Meditation or focus exercises",
        "Just dive in without preparation"
      ]
    },
    {
      question: "How long can you stay focused before needing a break?",
      options: [
        "15-25 minutes",
        "25-45 minutes",
        "45-60 minutes",
        "60-90 minutes",
        "90-120 minutes",
        "More than 2 hours"
      ]
    },
    {
      question: "What are the main things that distract you while studying?",
      options: [
        "Phone notifications and social media",
        "External noise and conversations",
        "Family members or roommates",
        "Feeling tired or sleepy",
        "Thinking about other tasks",
        "Lack of interest in the material"
      ]
    },
    {
      question: "Which subjects or topics do you struggle with the most, and why?",
      options: [
        "Mathematics - abstract concepts",
        "Science - complex theories and formulas",
        "Languages - memorization and grammar",
        "Writing - organization and structure",
        "Programming - logical thinking and debugging",
        "Time management and study planning"
      ]
    },
    {
      question: "Do you struggle more with remembering information, understanding concepts, or applying what you learn?",
      options: [
        "Remembering information - memorization",
        "Understanding concepts - comprehension",
        "Applying what I learn - practical use",
        "All three equally",
        "Understanding and applying",
        "Remembering and understanding"
      ]
    },
    {
      question: "What is your biggest challenge in studying consistently?",
      options: [
        "Lack of motivation and discipline",
        "Poor time management skills",
        "Too many distractions in environment",
        "Difficulty concentrating for long periods",
        "Inconsistent sleep and energy levels",
        "Overwhelming workload and stress"
      ]
    },
    {
      question: "Do you have upcoming exams, projects, or deadlines? List the dates.",
      options: [
        "Multiple exams within 2 weeks",
        "Major project due within a month",
        "Several deadlines this semester",
        "One big exam/project coming up",
        "Ongoing assignments with no fixed dates",
        "No immediate deadlines"
      ]
    },
    {
      question: "How would you describe your study personality?",
      options: [
        "Structured and organized planner",
        "Flexible and adaptable learner",
        "Intense and focused studier",
        "Social and collaborative learner",
        "Independent and self-motivated",
        "Creative and visual learner"
      ]
    }
  ];



  // Header Component
  const Header = () => (
    <header className="px-6 py-4 flex items-center justify-between shadow-lg"
      style={{ background: `linear-gradient(90deg, ${M.primary}, ${M.secondary})` }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md border-2 border-gray-300">
          <HelpCircle className="w-6 h-6" style={{ color: M.primary }} />
        </div>
        <span className="text-white text-xl font-bold">Mentora - Study Planner</span>
      </div>

      <nav className="flex items-center gap-4">
        <button onClick={() => navigate('/career-builder')} className="text-white font-medium hover:underline hidden md:block">Career Builder</button>

        {isLoggedIn ? (
          <button
            onClick={() => navigate('/profile')}
            className="ml-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden hover:scale-110 transition-transform"
            title="Open profile"
          >
            <img src={user.avatar} alt="avatar" className="w-full h-full object-cover" />
          </button>
        ) : (
          <button onClick={() => navigate('/login')} className="ml-4 bg-white text-[#6B9080] px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow">Login</button>
        )}
      </nav>
    </header>
  );

  const startQuiz = (id) => {
    setCurrentQuizId(id);
    setQuizStarted(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const generateStudyPlan = (answers) => {
    // Simple AI-like analysis based on answers
    const goals = answers[0] || '';
    const subject = answers[1] || '';
    const hours = answers[2] || '';
    const days = answers[3] || '';
    const planning = answers[4] || '';
    const focus = answers[5] || '';
    const struggles = answers[6] || '';
    const challenge = answers[7] || '';
    const deadlines = answers[8] || '';
    const environment = answers[9] || '';
    const techniques = answers[10] || '';
    const motivation = answers[11] || '';

    let studyPlan = {
      title: "Your Personalized Study Plan",
      summary: "",
      recommendations: [],
      schedule: [],
      tips: []
    };

    // Generate summary based on goals
    if (goals.includes('Improve grades')) {
      studyPlan.summary = "Focus on targeted improvement in key subjects with structured revision.";
    } else if (goals.includes('Master new skills')) {
      studyPlan.summary = "Emphasize skill-building through practical application and consistent practice.";
    } else if (goals.includes('Prepare for exams')) {
      studyPlan.summary = "Prioritize exam preparation with focused study sessions and mock tests.";
    }

    // Schedule based on availability
    if (hours.includes('2-3 hours')) {
      studyPlan.schedule.push("2-3 focused study sessions per day");
    } else if (hours.includes('4-5 hours')) {
      studyPlan.schedule.push("4-5 hours of structured study daily");
    }

    if (days.includes('Weekdays only')) {
      studyPlan.schedule.push("Dedicated weekday study routine");
    } else if (days.includes('Every day')) {
      studyPlan.schedule.push("Balanced daily study including weekends");
    }

    // Techniques recommendations
    if (focus.includes('25-45 minutes')) {
      studyPlan.recommendations.push("Use Pomodoro technique (25 min study + 5 min break)");
    }

    if (challenge.includes('Distractions')) {
      studyPlan.tips.push("Create a dedicated study space free from distractions");
      studyPlan.tips.push("Use website blockers during study sessions");
    }

    if (environment.includes('Home desk')) {
      studyPlan.tips.push("Optimize your home study space for better focus");
    }

    // Default recommendations if analysis is minimal
    if (studyPlan.recommendations.length === 0) {
      studyPlan.recommendations = [
        "Set specific, achievable daily goals",
        "Use active recall and spaced repetition",
        "Take regular breaks to maintain focus",
        "Track your progress weekly"
      ];
    }

    if (studyPlan.tips.length === 0) {
      studyPlan.tips = [
        "Stay consistent with your study schedule",
        "Get adequate sleep for better concentration",
        "Stay hydrated and maintain healthy eating habits",
        "Review material regularly to reinforce learning"
      ];
    }

    return studyPlan;
  };

  const submitQuiz = () => {
    const plan = generateStudyPlan(quizAnswers);
    setStudyPlan(plan);
    setShowResults(true);

    // Mark quiz as completed
    setQuizzes(q => q.map(quiz =>
      quiz.id === currentQuizId
        ? { ...quiz, completed: true, score: 85 }
        : quiz
    ));
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuizId(null);
    setCurrentQuestionIndex(0);
    setQuizAnswers({});
    setShowResults(false);
    setStudyPlan(null);
  };

  // QUIZ LIST VIEW
  if (!quizStarted) {
    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border" style={{ borderColor: M.bg3 }}>
            <h2 className="text-xl font-bold text-[#2C3E3F] mb-2 flex items-center gap-2">
              <HelpCircle className="w-6 h-6" style={{ color: M.primary }} />
              Study Plan Assessment
            </h2>
            <p className="text-sm text-[#5A7A6B] mb-4">Take the assessment to get a personalized study plan</p>
          </div>

          <div className="space-y-4">
            {quizzes.map(quiz => (
              <div
                key={quiz.id}
                className="bg-white rounded-2xl p-5 shadow-lg border hover:shadow-xl transition-all"
                style={{ borderColor: M.bg3 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-[#2C3E3F] text-lg">{quiz.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-[#5A7A6B]">
                      <span className="flex items-center gap-1">
                        <HelpCircle className="w-4 h-4" />
                        {quiz.questions} questions
                      </span>
                    </div>
                  </div>
                  {quiz.completed && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700">
                      <CheckSquare className="w-4 h-4" />
                      <span className="text-sm font-medium">{quiz.score}%</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => startQuiz(quiz.id)}
                  className="w-full mt-3 px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  style={{ background: quiz.completed ? M.secondary : M.primary }}
                >
                  {quiz.completed ? (
                    <>
                      <RotateCcw className="w-4 h-4" />
                      Retake Assessment
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Start Assessment
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  // RESULTS VIEW
  if (showResults && studyPlan) {
    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border" style={{ borderColor: M.bg3 }}>
            <h2 className="text-xl font-bold text-[#2C3E3F] mb-2 flex items-center gap-2">
              <CheckSquare className="w-6 h-6" style={{ color: M.primary }} />
              {studyPlan.title}
            </h2>
            <p className="text-sm text-[#5A7A6B]">{studyPlan.summary}</p>
          </div>

          {studyPlan.schedule.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border" style={{ borderColor: M.bg3 }}>
              <h3 className="text-lg font-semibold text-[#2C3E3F] mb-4">📅 Recommended Schedule</h3>
              <ul className="space-y-2">
                {studyPlan.schedule.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#5A7A6B]">
                    <div className="w-2 h-2 rounded-full" style={{ background: M.primary }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {studyPlan.recommendations.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border" style={{ borderColor: M.bg3 }}>
              <h3 className="text-lg font-semibold text-[#2C3E3F] mb-4">💡 Study Recommendations</h3>
              <ul className="space-y-2">
                {studyPlan.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#5A7A6B]">
                    <div className="w-2 h-2 rounded-full" style={{ background: M.primary }}></div>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {studyPlan.tips.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border" style={{ borderColor: M.bg3 }}>
              <h3 className="text-lg font-semibold text-[#2C3E3F] mb-4">✨ Additional Tips</h3>
              <ul className="space-y-2">
                {studyPlan.tips.map((tip, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#5A7A6B]">
                    <div className="w-2 h-2 rounded-full" style={{ background: M.secondary }}></div>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Great Planner AI Analysis Section */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border" style={{ borderColor: M.bg3, background: `linear-gradient(135deg, ${M.bg1}, white)` }}>
            <h3 className="text-xl font-bold text-[#2C3E3F] mb-4 flex items-center gap-2">
              🎯 Great Planner - AI Analysis
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-lg border" style={{ borderColor: M.bg3, background: M.bg1 }}>
                <h4 className="font-semibold text-[#2C3E3F] mb-2">📊 Analysis Summary</h4>
                <p className="text-[#5A7A6B] text-sm">
                  Based on your responses, our AI has analyzed your study patterns, goals, and challenges to create a personalized learning strategy.
                  Your study plan has been optimized for maximum effectiveness based on your available time, preferred learning style, and academic objectives.
                </p>
              </div>

              <div className="p-4 rounded-lg border" style={{ borderColor: M.bg3, background: M.bg1 }}>
                <h4 className="font-semibold text-[#2C3E3F] mb-2">🤖 AI Insights</h4>
                <div className="space-y-2 text-sm text-[#5A7A6B]">
                  <p><strong>Study Style:</strong> {quizAnswers[4]?.includes('Detailed') ? 'Structured Planner' : quizAnswers[4]?.includes('Flexible') ? 'Adaptive Learner' : 'Goal-Oriented Student'}</p>
                  <p><strong>Focus Pattern:</strong> {quizAnswers[5]?.includes('25-45') ? 'Pomodoro Compatible' : quizAnswers[5]?.includes('60-90') ? 'Deep Focus' : 'Short Bursts'}</p>
                  <p><strong>Motivation Type:</strong> {quizAnswers[11]?.includes('personal goals') ? 'Intrinsic' : quizAnswers[11]?.includes('competition') ? 'Competitive' : 'Achievement-Driven'}</p>
                  <p><strong>Success Probability:</strong> <span className="text-green-600 font-medium">High (85%)</span> - With consistent application of this plan</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border" style={{ borderColor: M.bg3, background: M.bg1 }}>
                <h4 className="font-semibold text-[#2C3E3F] mb-2">🎯 Key Recommendations</h4>
                <ul className="space-y-1 text-sm text-[#5A7A6B]">
                  <li>• Start with your most challenging subjects during peak energy times</li>
                  <li>• Use the recommended study techniques for better retention</li>
                  <li>• Track your progress weekly to stay motivated</li>
                  <li>• Adjust the schedule as needed while maintaining consistency</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={resetQuiz}
              className="flex-1 px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
              style={{ background: M.secondary }}
            >
              <RotateCcw className="w-4 h-4" />
              Retake Assessment
            </button>
            <button
              onClick={() => navigate('/study-planner')}
              className="flex-1 px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
              style={{ background: M.primary }}
            >
              Create Study Plan
            </button>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  // QUIZ TAKING VIEW
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const hasAnsweredFirstQuestion = quizAnswers[0] !== undefined && quizAnswers[0] !== '';

  return (
    <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
      <Header />
      <main className="container mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border" style={{ borderColor: M.bg3 }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#2C3E3F] flex items-center gap-2">
              <HelpCircle className="w-6 h-6" style={{ color: M.primary }} />
              Assessment in Progress
            </h2>
            <span className="text-sm text-[#5A7A6B]">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`, background: M.primary }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
          <h3 className="text-lg font-semibold text-[#2C3E3F] mb-4">{currentQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer transition-all" style={{ borderColor: M.bg3 }}>
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={quizAnswers[currentQuestionIndex] === option}
                  onChange={(e) => setQuizAnswers(prev => ({ ...prev, [currentQuestionIndex]: e.target.value }))}
                  className="w-4 h-4 text-[#6B9080] focus:ring-[#6B9080]"
                />
                <span className="text-[#2C3E3F]">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'text-white hover:shadow-lg'
            }`}
            style={currentQuestionIndex === 0 ? {} : { background: M.secondary }}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {isLastQuestion ? (
            <button
              onClick={submitQuiz}
              className="px-8 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center gap-2"
              style={{ background: M.primary }}
            >
              Submit Assessment
              <CheckSquare className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                if (isFirstQuestion || hasAnsweredFirstQuestion) {
                  nextQuestion();
                } else {
                  alert('Please answer the first question before proceeding.');
                }
              }}
              disabled={!quizAnswers[currentQuestionIndex]}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
                !quizAnswers[currentQuestionIndex]
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'text-white hover:shadow-lg'
              }`}
              style={!quizAnswers[currentQuestionIndex] ? {} : { background: M.primary }}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
