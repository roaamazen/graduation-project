// استيراد المكتبات والمكونات المطلوبة
import React, { useState, useEffect } from 'react'; // React hooks لإدارة الحالة والتأثيرات
import { useNavigate } from 'react-router-dom'; // للتنقل بين الصفحات
import { useUser } from '../contexts/UserContext'; // لإدارة حالة المستخدم العامة
import {
  BookOpen, // أيقونة كتاب مفتوح
  CheckSquare, // أيقونة مربع تحقق
  BookMarked, // أيقونة كتاب مميز
  Clock, // أيقونة ساعة
  Calendar, // أيقونة تقويم
  HelpCircle, // أيقونة دائرة مساعدة
  ClipboardCheck, // أيقونة لوح تحقق
  Home as HomeIcon, // أيقونة المنزل
  ChevronRight, // أيقونة سهم يمين
  ChevronLeft, // أيقونة سهم يسار
  X, // أيقونة X
  Plus, // أيقونة زائد
  Trash2, // أيقونة سلة مهملات
  Play, // أيقونة تشغيل
  Pause, // أيقونة إيقاف مؤقت
  RotateCcw, // أيقونة إعادة تعيين
  Award, // أيقونة جائزة
  TrendingUp, // أيقونة اتجاه تصاعدي
  BookOpenCheck, // أيقونة كتاب مفتوح مع تحقق
  Flame, // أيقونة لهب
  User as UserIcon, // أيقونة مستخدم
  Save, // أيقونة حفظ
  LayoutDashboard, // أيقونة لوحة تحكم
} from 'lucide-react'; // مكتبة الأيقونات

// المكون الرئيسي للتطبيق
export default function StudyPlanner() {
  const navigate = useNavigate(); // وظيفة التنقل
  const { user, setUser } = useUser(); // استخدام السياق العام للمستخدم

  // ألوان الثيم (التصميم)
  const M = {
    primary: '#6B9080', // اللون الأساسي
    secondary: '#A4C3B2', // اللون الثانوي
    bg1: '#F6FFF8', // خلفية 1
    bg2: '#EAF4F4', // خلفية 2
    bg3: '#E8F3E8', // خلفية 3
    text: '#2C3E3F', // لون النص
    muted: '#5A7A6B', // لون النص الخافت
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true); // هل المستخدم مسجل دخول؟
  const [currentView, setCurrentView] = useState('home'); // العرض الحالي (home, attendance, notes, etc.)



  // حالة الحضور - تخزن سجلات حضور الطالب في المواد المختلفة
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, subject: 'Mathematics', date: '2024-12-15', status: 'present' },
    { id: 2, subject: 'Physics', date: '2024-12-15', status: 'present' },
    { id: 3, subject: 'Chemistry', date: '2024-12-14', status: 'absent' },
    { id: 4, subject: 'Computer Science', date: '2024-12-14', status: 'present' },
    { id: 5, subject: 'Mathematics', date: '2024-12-13', status: 'present' },
  ]);

  // حالة المهام - قائمة المهام التي يجب إنجازها
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete Math Assignment', completed: false },
    { id: 2, text: 'Read Chapter 5 - Physics', completed: true },
    { id: 3, text: 'Prepare for Chemistry test', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState(''); // نص المهمة الجديدة
  const [todoFilter, setTodoFilter] = useState('all'); // فلتر المهام (all, completed, pending)

  // حالة الملاحظات - تخزن الملاحظات المحفوظة
  const [notes, setNotes] = useState([
    { id: 1, title: 'Important Formulas', content: 'Newton\'s laws, Kinematic equations, Energy conservation', date: '2024-12-15' },
  ]);
  const [noteTitle, setNoteTitle] = useState(''); // عنوان الملاحظة الجديدة
  const [noteContent, setNoteContent] = useState(''); // محتوى الملاحظة الجديدة

  // حالة المؤقت - لإدارة مؤقت البومودورو
  const [timerMinutes, setTimerMinutes] = useState(25); // الدقائق المتبقية
  const [timerSeconds, setTimerSeconds] = useState(0); // الثواني المتبقية
  const [isTimerRunning, setIsTimerRunning] = useState(false); // هل المؤقت يعمل؟
  const [timerMode, setTimerMode] = useState('focus'); // وضع المؤقت (focus, short, long)

  // حالة المخطط - تخزن الأحداث والمواعيد المجدولة
  const [events, setEvents] = useState([
    { id: 1, title: 'Math Exam', date: '2024-12-20', time: '10:00', duration: '2h' },
    { id: 2, title: 'Physics Lab', date: '2024-12-21', time: '14:00', duration: '3h' },
  ]);

  // حالة الاختبارات - قائمة الاختبارات المتاحة
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: 'Mathematics Quiz', questions: 10, duration: '15 min', completed: false, score: null },
    { id: 2, title: 'Physics Quiz', questions: 8, duration: '12 min', completed: true, score: 80 },
    { id: 3, title: 'Chemistry Quiz', questions: 12, duration: '20 min', completed: false, score: null },
  ]);
  const [currentQuizId, setCurrentQuizId] = useState(null); // معرف الاختبار الحالي
  const [quizQuestions, setQuizQuestions] = useState([]); // أسئلة الاختبار الحالي
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // فهرس السؤال الحالي
  const [quizAnswers, setQuizAnswers] = useState({}); // إجابات المستخدم
  const [quizScore, setQuizScore] = useState(null); // النتيجة النهائية


    


  // حالة تحرير الملف الشخصي - تخزن البيانات المؤقتة أثناء تحرير الملف الشخصي
  const [profileEdit, setProfileEdit] = useState({
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    phone: user.phone,
    location: user.location,
    bio: user.bio,
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false); // هل المستخدم يحرر الملف الشخصي حالياً؟

  // تأثير لتحديث بيانات تحرير الملف الشخصي عند تغيير المستخدم
  useEffect(() => {
    setProfileEdit({
      name: user?.name || '',
      email: user?.email || '',
      avatar: user?.avatar || '',
      phone: user?.phone || '',
      location: user?.location || '',
      bio: user?.bio || '',
    });
  }, [user]);

  // تأثير المؤقت - يدير العد التنازلي للمؤقت
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((s) => {
          if (s === 0) {
            if (timerMinutes === 0) {
              setIsTimerRunning(false);
              alert('Timer completed! 🎉');
              return 0;
            } else {
              setTimerMinutes((m) => m - 1);
              return 59;
            }
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerMinutes]);

  // دوال مساعدة - لإدارة العمليات المختلفة في التطبيق
  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos((t) => [...t, { id: Date.now(), text: newTodo.trim(), completed: false }]);
    setNewTodo('');
  };
  const toggleTodo = (id) => {
    setTodos((t) => t.map(x => x.id === id ? { ...x, completed: !x.completed } : x));
    if (!todos.find(x => x.id === id).completed) {
      setUser(u => ({ ...u, completedTasks: u.completedTasks + 1 }));
    }
  };
  const deleteTodo = (id) => setTodos((t) => t.filter(x => x.id !== id));

  const addNote = () => {
    if (!noteTitle.trim() || !noteContent.trim()) return;
    setNotes(n => [{ id: Date.now(), title: noteTitle.trim(), content: noteContent.trim(), date: new Date().toISOString().split('T')[0] }, ...n]);
    setNoteTitle('');
    setNoteContent('');
  };
  const deleteNote = (id) => setNotes(n => n.filter(x => x.id !== id));

  const addEvent = (title, date, time) => {
    if (!title || !date || !time) return;
    setEvents(e => [...e, { id: Date.now(), title, date, time, duration: '1h' }]);
  };
  const deleteEvent = (id) => setEvents(e => e.filter(x => x.id !== id));

  const saveProfile = () => {
    setUser(u => ({ ...u, ...profileEdit }));
    setIsEditingProfile(false);
    alert('Profile updated successfully! ✓');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('home');
    alert('Logged out successfully.');
  };

  const handleLoginDemo = () => {
    setUser({
      name: 'Bijaya Kumar Behera',
      email: 'kumarbijayebehera07@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bijaya',
      phone: '+962 79 123 4567',
      location: 'Amman, Jordan',
      joinDate: 'January 2024',
      studyStreak: 7,
      totalHours: 124,
      completedTasks: 45,
      bio: 'Computer Science student passionate about learning and personal growth.',
    });
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };



  const markAttendance = (subject, status) => {
    const today = new Date().toISOString().split('T')[0];
    setAttendanceRecords(a => [{ id: Date.now(), subject, date: today, status }, ...a]);
  };



  // Calculate attendance stats
  const attendanceStats = {
    total: attendanceRecords.length,
    present: attendanceRecords.filter(r => r.status === 'present').length,
    absent: attendanceRecords.filter(r => r.status === 'absent').length,
    percentage: Math.round((attendanceRecords.filter(r => r.status === 'present').length / attendanceRecords.length) * 100) || 0,
  };

  // Components
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
      <div className="flex justify-around items-center py-3">
        <button onClick={() => setCurrentView('home')} className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${currentView === 'home' ? 'text-[#6B9080]' : 'text-[#5A7A6B]'}`}>
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button onClick={() => navigate('/dashboard')} className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${currentView === 'dashboard' ? 'text-[#6B9080]' : 'text-[#5A7A6B]'}`}>
          <LayoutDashboard className="w-6 h-6" />
          <span className="text-xs font-medium">Dashboard</span>
        </button>

        <button onClick={() => setCurrentView('profile')} className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${currentView === 'profile' ? 'text-[#6B9080]' : 'text-[#5A7A6B]'}`}>
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

  // HOME VIEW
  if (currentView === 'home') {
    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24 text-[#2C3E3F]">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          {/* Welcome Section */}
          <section className="bg-white rounded-3xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3, background: `linear-gradient(135deg, ${M.bg1}, white)` }}>
            <h1 className="text-3xl font-bold text-[#2C3E3F] mb-2">Welcome to Mentora</h1>
            <p className="text-[#5A7A6B] mb-4">Your personal study companion for academic excellence</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">{user.studyStreak} day streak</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm">
                <Clock className="w-5 h-5" style={{ color: M.primary }} />
                <span className="font-semibold">{user.totalHours}h studied</span>
              </div>
            </div>
          </section>

          {/* Study Tools */}
          <section className="bg-white rounded-3xl p-6 shadow-lg border" style={{ borderColor: M.bg3 }}>
            <h2 className="text-xl font-bold text-[#2C3E3F] mb-4">Study Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button onClick={() => navigate('/todo')} className="flex flex-col items-center gap-2 p-4 rounded-2xl border hover:shadow-md hover:scale-105 transition-all" style={{ borderColor: M.bg3 }}>
                <CheckSquare className="w-8 h-8" style={{ color: M.primary }} />
                <span className="text-sm font-medium">To-Do</span>
                <span className="text-xs text-[#5A7A6B]">{todos.filter(t => !t.completed).length} pending</span>
              </button>
              <button onClick={() => navigate('/notes')} className="flex flex-col items-center gap-2 p-4 rounded-2xl border hover:shadow-md hover:scale-105 transition-all" style={{ borderColor: M.bg3 }}>
                <BookMarked className="w-8 h-8" style={{ color: M.primary }} />
                <span className="text-sm font-medium">Notes</span>
                <span className="text-xs text-[#5A7A6B]">{notes.length} saved</span>
              </button>
              <button onClick={() => navigate('/timer')} className="flex flex-col items-center gap-2 p-4 rounded-2xl border hover:shadow-md hover:scale-105 transition-all" style={{ borderColor: M.bg3 }}>
                <Clock className="w-8 h-8" style={{ color: M.primary }} />
                <span className="text-sm font-medium">Timer</span>
                <span className="text-xs text-[#5A7A6B]">Pomodoro</span>
              </button>
              <button onClick={() => navigate('/planner')} className="flex flex-col items-center gap-2 p-4 rounded-2xl border hover:shadow-md hover:scale-105 transition-all" style={{ borderColor: M.bg3 }}>
                <Calendar className="w-8 h-8" style={{ color: M.primary }} />
                <span className="text-sm font-medium">Planner</span>
                <span className="text-xs text-[#5A7A6B]">{events.length} events</span>
              </button>
              <button onClick={() => navigate('/attendance')} className="flex flex-col items-center gap-2 p-4 rounded-2xl border hover:shadow-md hover:scale-105 transition-all" style={{ borderColor: M.bg3 }}>
                <ClipboardCheck className="w-8 h-8" style={{ color: M.primary }} />
                <span className="text-sm font-medium">Attendance</span>
                <span className="text-xs text-[#5A7A6B]">{attendanceStats.percentage}% present</span>
              </button>
              <button onClick={() => navigate('/quiz')} className="flex flex-col items-center gap-2 p-4 rounded-2xl border hover:shadow-md hover:scale-105 transition-all" style={{ borderColor: M.bg3 }}>
                <HelpCircle className="w-8 h-8" style={{ color: M.primary }} />
                <span className="text-sm font-medium">Great Study Planner</span>
                <span className="text-xs text-[#5A7A6B]">AI Assessment</span>
              </button>
            </div>
          </section>
        </main>
        <BottomNav />
      </div>
    );
  }

  // ATTENDANCE VIEW
  if (currentView === 'attendance') {
    const [newSubject, setNewSubject] = useState('');
    const [newStatus, setNewStatus] = useState('present');

    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          {/* Stats Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border" style={{ borderColor: M.bg3 }}>
            <h2 className="text-xl font-bold text-[#2C3E3F] mb-4 flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6" style={{ color: M.primary }} />
              Attendance Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl" style={{ background: M.bg1 }}>
                <p className="text-3xl font-bold" style={{ color: M.primary }}>{attendanceStats.total}</p>
                <p className="text-sm text-[#5A7A6B]">Total Classes</p>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: M.bg1 }}>
                <p className="text-3xl font-bold text-green-600">{attendanceStats.present}</p>
                <p className="text-sm text-[#5A7A6B]">Present</p>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: M.bg1 }}>
                <p className="text-3xl font-bold text-red-600">{attendanceStats.absent}</p>
                <p className="text-sm text-[#5A7A6B]">Absent</p>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: M.bg1 }}>
                <p className="text-3xl font-bold" style={{ color: M.primary }}>{attendanceStats.percentage}%</p>
                <p className="text-sm text-[#5A7A6B]">Rate</p>
              </div>
            </div>
          </div>

          {/* Mark Attendance */}
          <div className="bg-white rounded-2xl p-5 shadow-lg mb-6 border" style={{ borderColor: M.bg3 }}>
            <h3 className="font-bold text-[#2C3E3F] mb-3">Mark Today's Attendance</h3>
            <div className="flex gap-3">
              <input 
                value={newSubject} 
                onChange={e => setNewSubject(e.target.value)}
                placeholder="Subject name" 
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6B9080]" 
                style={{ borderColor: M.bg3 }} 
              />
              <select 
                value={newStatus} 
                onChange={e => setNewStatus(e.target.value)}
                className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6B9080]" 
                style={{ borderColor: M.bg3 }}
              >
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </select>
              <button 
                onClick={() => {
                  if (newSubject.trim()) {
                    markAttendance(newSubject.trim(), newStatus);
                    setNewSubject('');
                  }
                }}
                className="px-6 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center gap-2" 
                style={{ background: M.primary }}
              >
                <Plus className="w-4 h-4" />
                Mark
              </button>
            </div>
          </div>

          {/* Attendance Records */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border" style={{ borderColor: M.bg3 }}>
            <h3 className="font-bold text-[#2C3E3F] mb-4">Attendance History</h3>
            <div className="space-y-3">
              {attendanceRecords.map(record => (
                <div 
                  key={record.id} 
                  className="flex items-center justify-between p-4 rounded-xl hover:shadow-md transition-all"
                  style={{ background: M.bg1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${record.status === 'present' ? 'bg-green-100' : 'bg-red-100'}`}>
                      <ClipboardCheck className={`w-5 h-5 ${record.status === 'present' ? 'text-green-600' : 'text-red-600'}`} />
                    </div>
                    <div>
                      <p className="font-medium text-[#2C3E3F]">{record.subject}</p>
                      <p className="text-xs text-[#5A7A6B]">{record.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${record.status === 'present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {record.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }



  // NOTES VIEW
  if (currentView === 'notes') {
    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg border mb-4" style={{ borderColor: M.bg3 }}>
            <input 
              placeholder="Note title..." 
              value={noteTitle} 
              onChange={e => setNoteTitle(e.target.value)} 
              className="w-full px-3 py-2 rounded-lg border mb-3 focus:outline-none focus:ring-2 focus:ring-[#6B9080]" 
              style={{ borderColor: M.bg3 }} 
            />
            <textarea 
              placeholder="Write your note..." 
              value={noteContent} 
              onChange={e => setNoteContent(e.target.value)} 
              rows={4} 
              className="w-full px-3 py-2 rounded-lg border mb-3 focus:outline-none focus:ring-2 focus:ring-[#6B9080]" 
              style={{ borderColor: M.bg3 }} 
            />
            <div className="flex gap-2">
              <button 
                onClick={addNote} 
                className="px-6 py-2 rounded-lg text-white flex items-center gap-2 hover:shadow-lg transition-all font-medium" 
                style={{ background: M.primary }}
              >
                <Save className="w-4 h-4" /> Save Note
              </button>
              <button 
                onClick={() => { setNoteTitle(''); setNoteContent(''); }} 
                className="px-6 py-2 rounded-lg border font-medium hover:shadow-md transition-all" 
                style={{ borderColor: M.bg3 }}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {notes.length === 0 ? (
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <BookMarked className="w-12 h-12 mx-auto mb-3 text-[#5A7A6B]" />
                <p className="text-[#5A7A6B]">No notes yet. Create your first note above!</p>
              </div>
            ) : (
              notes.map(n => (
                <div key={n.id} className="bg-white rounded-xl p-5 shadow-md border hover:shadow-lg transition-all" style={{ borderColor: M.bg3 }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-[#2C3E3F] text-lg">{n.title}</h4>
                      <p className="text-xs text-[#5A7A6B] flex items-center gap-1 mt-1">
                        <Calendar className="w-3 h-3" />
                        {n.date}
                      </p>
                    </div>
                    <button 
                      onClick={() => deleteNote(n.id)} 
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[#5A7A6B]">{n.content}</p>
                </div>
              ))
            )}
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  // TIMER VIEW
  if (currentView === 'timer') {
    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border" style={{ borderColor: M.bg3 }}>
            <h2 className="text-2xl font-bold text-center text-[#2C3E3F] mb-6">Pomodoro Timer</h2>
            
            <div className="flex justify-center gap-3 mb-8">
              {[
                {mode:'focus',label:'Focus (25m)', time: 25},
                {mode:'short',label:'Short (5m)', time: 5},
                {mode:'long',label:'Long (15m)', time: 15}
              ].map(it => (
                <button 
                  key={it.mode} 
                  onClick={() => {
                    setTimerMode(it.mode);
                    setIsTimerRunning(false);
                    setTimerMinutes(it.time);
                    setTimerSeconds(0);
                  }} 
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${timerMode===it.mode ? 'text-white shadow-md' : 'text-[#5A7A6B] hover:bg-[#F6FFF8]'}`} 
                  style={timerMode===it.mode ? { background: M.primary } : { border: `1px solid ${M.bg3}` }}
                >
                  {it.label}
                </button>
              ))}
            </div>

            <div className="text-center mb-8">
              <div className="text-7xl font-bold text-[#2C3E3F] mb-4 font-mono">
                {String(timerMinutes).padStart(2,'0')}:{String(timerSeconds).padStart(2,'0')}
              </div>
              <p className="text-lg text-[#5A7A6B]">
                {timerMode === 'focus' ? '🎯 Time to focus!' : '☕ Take a break!'}
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              {!isTimerRunning ? (
                <button 
                  onClick={() => setIsTimerRunning(true)} 
                  className="px-8 py-4 rounded-xl text-white flex items-center gap-2 text-lg font-medium hover:shadow-lg transition-all" 
                  style={{ background: M.primary }}
                >
                  <Play className="w-5 h-5" /> Start
                </button>
              ) : (
                <button 
                  onClick={() => setIsTimerRunning(false)} 
                  className="px-8 py-4 rounded-xl text-white flex items-center gap-2 text-lg font-medium hover:shadow-lg transition-all" 
                  style={{ background: M.secondary }}
                >
                  <Pause className="w-5 h-5" /> Pause
                </button>
              )}
              <button 
                onClick={() => { 
                  setIsTimerRunning(false); 
                  setTimerMinutes(timerMode==='focus'?25:timerMode==='short'?5:15); 
                  setTimerSeconds(0); 
                }} 
                className="px-8 py-4 rounded-xl border font-medium hover:shadow-md transition-all flex items-center gap-2" 
                style={{ borderColor: M.bg3 }}
              >
                <RotateCcw className="w-5 h-5" /> Reset
              </button>
            </div>

            <div className="border-t pt-6" style={{ borderColor: M.bg3 }}>
              <p className="text-center text-sm text-[#5A7A6B] mb-3">Custom Time</p>
              <div className="flex justify-center items-center gap-3">
                <button 
                  onClick={() => setTimerMinutes(m => Math.max(0,m-5))} 
                  className="px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all" 
                  style={{ background: M.secondary }}
                >
                  -5m
                </button>
                <input 
                  type="number" 
                  min="0" 
                  value={timerMinutes} 
                  onChange={(e) => { 
                    setTimerMinutes(Math.max(0, Number(e.target.value))); 
                    setTimerSeconds(0); 
                  }} 
                  className="w-24 px-3 py-2 text-center rounded-lg border text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#6B9080]" 
                  style={{ borderColor: M.bg3 }} 
                />
                <button 
                  onClick={() => setTimerMinutes(m => m + 5)} 
                  className="px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all" 
                  style={{ background: M.primary }}
                >
                  +5m
                </button>
              </div>
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  // PLANNER VIEW
  if (currentView === 'planner') {
    const [evTitle, setEvTitle] = useState('');
    const [evDate, setEvDate] = useState('');
    const [evTime, setEvTime] = useState('');
    
    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          <div className="bg-white rounded-2xl p-5 shadow-lg border mb-4" style={{ borderColor: M.bg3 }}>
            <h3 className="font-bold text-[#2C3E3F] mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: M.primary }} />
              Add New Event
            </h3>
            <div className="space-y-3">
              <input 
                value={evTitle} 
                onChange={e => setEvTitle(e.target.value)} 
                placeholder="Event title" 
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6B9080]" 
                style={{ borderColor: M.bg3 }} 
              />
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="date" 
                  value={evDate} 
                  onChange={e => setEvDate(e.target.value)} 
                  className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6B9080]" 
                  style={{ borderColor: M.bg3 }} 
                />
                <input 
                  type="time" 
                  value={evTime} 
                  onChange={e => setEvTime(e.target.value)} 
                  className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6B9080]" 
                  style={{ borderColor: M.bg3 }} 
                />
              </div>
              <button 
                onClick={() => {
                  addEvent(evTitle, evDate, evTime);
                  setEvTitle('');
                  setEvDate('');
                  setEvTime('');
                }} 
                className="w-full px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2" 
                style={{ background: M.primary }}
              >
                <Plus className="w-5 h-5" />
                Add Event
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border" style={{ borderColor: M.bg3 }}>
            <h3 className="font-bold text-[#2C3E3F] mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {events.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 mx-auto mb-3 text-[#5A7A6B]" />
                  <p className="text-[#5A7A6B]">No events scheduled</p>
                </div>
              ) : (
                events.map(ev => (
                  <div 
                    key={ev.id} 
                    className="flex items-center justify-between p-4 rounded-xl hover:shadow-md transition-all"
                    style={{ background: M.bg1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: M.primary }}>
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-[#2C3E3F]">{ev.title}</p>
                        <p className="text-sm text-[#5A7A6B] flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3" />
                          {ev.date} at {ev.time} ({ev.duration})
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteEvent(ev.id)} 
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }



  // QUIZ VIEW
  if (currentView === 'quiz') {
    const startQuiz = (quizId) => {
      const quiz = quizzes.find(q => q.id === quizId);
      if (!quiz) return;

      // Mock questions - in real app, this would come from API
      const mockQuestions = [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: ['London', 'Berlin', 'Paris', 'Madrid'],
          correctAnswer: 'Paris'
        },
        {
          id: 2,
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4'
        },
        {
          id: 3,
          question: 'What is the largest planet in our solar system?',
          options: ['Mars', 'Jupiter', 'Saturn', 'Venus'],
          correctAnswer: 'Jupiter'
        }
      ];

      setCurrentQuizId(quizId);
      setQuizQuestions(mockQuestions);
      setCurrentQuestionIndex(0);
      setQuizAnswers({});
      setQuizScore(null);
    };

    const handleAnswer = (questionId, answer) => {
      setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const nextQuestion = () => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Calculate score
        const correctAnswers = quizQuestions.filter(q => quizAnswers[q.id] === q.correctAnswer).length;
        const score = Math.round((correctAnswers / quizQuestions.length) * 100);
        setQuizScore(score);

        // Update quiz in state
        setQuizzes(prev => prev.map(q =>
          q.id === currentQuizId
            ? { ...q, completed: true, score }
            : q
        ));
      }
    };

    const resetQuiz = () => {
      setCurrentQuizId(null);
      setQuizQuestions([]);
      setCurrentQuestionIndex(0);
      setQuizAnswers({});
      setQuizScore(null);
    };

    if (currentQuizId && quizQuestions.length > 0) {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

      return (
        <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
          <Header />
          <main className="container mx-auto px-4 mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: M.bg3 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#2C3E3F]">Quiz in Progress</h2>
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2 rounded-lg border font-medium hover:shadow-md transition-all"
                  style={{ borderColor: M.bg3 }}
                >
                  Exit Quiz
                </button>
              </div>

              {quizScore !== null ? (
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4" style={{ color: M.primary }}>{quizScore}%</div>
                  <p className="text-lg text-[#5A7A6B] mb-6">Quiz Completed!</p>
                  <button
                    onClick={resetQuiz}
                    className="px-8 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all"
                    style={{ background: M.primary }}
                  >
                    Back to Quizzes
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-[#5A7A6B]">Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                      <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`, background: M.primary }}
                        ></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2C3E3F] mb-6">{currentQuestion.question}</h3>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(currentQuestion.id, option)}
                          className={`w-full p-4 rounded-lg border text-left transition-all ${
                            quizAnswers[currentQuestion.id] === option
                              ? 'border-[#6B9080] bg-[#F6FFF8]'
                              : 'border-[#E8F3E8] hover:bg-[#F6FFF8]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={nextQuestion}
                      disabled={!quizAnswers[currentQuestion.id]}
                      className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${
                        quizAnswers[currentQuestion.id]
                          ? 'hover:shadow-lg'
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                      style={{ background: quizAnswers[currentQuestion.id] ? M.primary : '#ccc' }}
                    >
                      {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </main>
          <BottomNav />
        </div>
      );
    }

    return (
      <div style={{ background: `linear-gradient(180deg, ${M.bg1}, ${M.bg2})` }} className="min-h-screen pb-24">
        <Header />
        <main className="container mx-auto px-4 mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border mb-6" style={{ borderColor: M.bg3 }}>
            <h2 className="text-2xl font-bold text-[#2C3E3F] mb-4 flex items-center gap-2">
              <HelpCircle className="w-6 h-6" style={{ color: M.primary }} />
              Available Quizzes
            </h2>
            <div className="grid gap-4">
              {quizzes.map(quiz => (
                <div
                  key={quiz.id}
                  className="p-4 rounded-xl border hover:shadow-md transition-all"
                  style={{ borderColor: M.bg3, background: M.bg1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${quiz.completed ? 'bg-green-100' : 'bg-blue-100'}`}>
                        <HelpCircle className={`w-6 h-6 ${quiz.completed ? 'text-green-600' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2C3E3F]">{quiz.title}</h4>
                        <p className="text-sm text-[#5A7A6B]">{quiz.questions} questions • {quiz.duration}</p>
                        {quiz.completed && (
                          <p className="text-sm font-medium text-green-600">Score: {quiz.score}%</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => startQuiz(quiz.id)}
                      className="px-6 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all"
                      style={{ background: M.primary }}
                    >
                      {quiz.completed ? 'Retake' : 'Start'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return null;
}
