import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import {
  ClipboardCheck,
  Home as HomeIcon,
  Plus,
  BookOpen,
  LayoutDashboard,
  User as UserIcon,
} from 'lucide-react';

export default function Attendance() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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

  // Attendance state
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, subject: 'Computer Networks', date: '2024-12-15', status: 'present' },
    { id: 2, subject: 'Operating Systems', date: '2024-12-15', status: 'present' },
    { id: 3, subject: 'Database Management', date: '2024-12-14', status: 'absent' },
    { id: 4, subject: 'Computer Science', date: '2024-12-14', status: 'present' },
    { id: 5, subject: 'Software Engineering', date: '2024-12-13', status: 'present' },
  ]);

  const [newSubject, setNewSubject] = useState('');
  const [newStatus, setNewStatus] = useState('present');

  // Calculate attendance stats
  const attendanceStats = {
    total: attendanceRecords.length,
    present: attendanceRecords.filter(r => r.status === 'present').length,
    absent: attendanceRecords.filter(r => r.status === 'absent').length,
    percentage: Math.round((attendanceRecords.filter(r => r.status === 'present').length / attendanceRecords.length) * 100) || 0,
  };

  const markAttendance = (subject, status) => {
    const today = new Date().toISOString().split('T')[0];
    setAttendanceRecords(a => [{ id: Date.now(), subject, date: today, status }, ...a]);
  };

  // Components
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
      <div className="flex justify-around items-center py-3">
        <button onClick={() => navigate('/study-planner')} className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all text-[#6B9080]`}>
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
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md border-2 border-gray-300">
          <BookOpen className="w-6 h-6" style={{ color: M.primary }} />
        </div>
        <span className="text-white text-xl font-bold">Mentora</span>
      </div>

      <nav className="flex items-center gap-4">
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
    </div>
  );
}
