import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/Mentora.jpg"; 
import { FiTarget, FiCalendar, FiUsers, FiBriefcase, FiBook, FiAward } from "react-icons/fi";
import {Award, BriefcaseBusiness ,GraduationCap, BookOpenText,Mail, MapPin, Phone, Linkedin, Twitter, Github, Star, Quote, Notebook } from "lucide-react"; // أيقونات

/* هدول الاكواد لل  icon */
const benefits = [
  {
    icon: FiTarget,
    title: "Personalized Insights",
    description: "Get tailored recommendations based on your goals, interests, and academic performance to make informed decisions."
  },
  {
    icon: FiCalendar,
    title: "Progress Tracking",
    description: "Monitor your academic progress and career milestones with intuitive dashboards and detailed analytics."
  },
  {
    icon: FiUsers,
    title: "Expert Guidance",
    description: "Access resources and strategies from education and career experts to accelerate your success."
  },
];


const featuresGrid = [
  {
    icon: FiCalendar,
    title: "Study Planner",
    description: "Organize your coursework, exams, and assignments with an intuitive calendar system.",
    color: "#7A5CFF"
  },
  {
    icon: Notebook,
    title: "Learning Resources",
    description: "Access curated study materials and resources tailored to your goals.",
    color: "#4A6EDB"
  },
  {
    icon: BriefcaseBusiness ,
    title: "Career Builder",
    description: "Build your professional profile, explore opportunities, and plan your career path.",
    color: "#7A5CFF"
  },
  {
    icon: Award ,
    title: "Achievements",
    description: "Celebrate milestones and track your accomplishments along the way.",
    color: "#7A5CFF"
  },
];

function CheckCircleMini({ color = "#7A5CFF" }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
      <circle cx="12" cy="12" r="12" fill={color} />
      <path
        d="M7 12.5l2.5 2.5L17 8.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* hero section */
function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0D1224] via-[#151B32] to-[#1E2A78]">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between backdrop-blur-md bg-[#0D1224]/20 border-b border-[#1F263C]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#7A5CFF] to-[#4A6EDB] rounded-lg flex items-center justify-center shadow-md">
          <GraduationCap className="w-6 h-6 text-white" />

          </div>
          <span className="text-white text-2xl font-semibold select-none">Mentora</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#7A5CFF] hover:bg-[#6244e8] text-white px-6 py-3 shadow-lg rounded-full text-sm">
            Login
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-white text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Build Your Career,<br />
              <span className="text-[#7A5CFF]">Plan Your Success</span>
            </h1>
            <p className="text-[#A8B0C3] text-xl mb-10 max-w-2xl mx-auto lg:mx-0">
              Mentora helps you navigate your academic journey and career path with intelligent planning tools and personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
  to="/Login"
  className="flex items-center justify-center gap-2 bg-[#7A5CFF] hover:bg-[#6244e8] text-white px-8 py-4 text-lg rounded-2xl shadow-lg"
>
  Get Started
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
</Link>

              <button
                onClick={() => document.getElementById("why-mentora")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-[#7A5CFF] text-[#7A5CFF] hover:bg-white/40 hover:text-white px-8 py-6 text-lg rounded-2xl transition-all"
              >
                Why Mentora?
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#1F263C]">
              <img src={heroImage} alt="Career Builder" className="w-full h-full object-cover" draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Project Summary */
function ProjectSummary() {
  return (
    <section className="bg-[#0D1224] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#151B32]/70 border border-[#1F263C] rounded-2xl p-8 backdrop-blur-md shadow-[0_0_25px_#7A5CFF33] text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">What is Mentora?</h2>
          <p className="text-[#A8B0C3] text-lg mb-4 leading-relaxed">
            Mentora is a personal guidance platform built for students and fresh graduates. It helps you discover the right career path, turn your goals into a clear roadmap, and stay consistent with a smart study planner.
          </p>
          <p className="text-[#A8B0C3] leading-relaxed mb-6">
            My goal is to create a tool I wish I had as a student: one place to plan studies, skills, and your future career — all in a simple, friendly interface.
          </p>
          <ul className="text-[#A8B0C3] leading-relaxed mb-6">
            <li>• Build a personalized career plan based on your skills and goals</li>
            <li>• Use the study planner to organize courses, exams, and daily focus</li>
            <li>• Prepare a professional CV step by step, tailored to each job</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/*  Why Mentora */
function WhyMentora() {
  return (
    <section id="why-mentora" className="bg-[#0D1224] py-20">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-white text-4xl lg:text-5xl mb-4">
          Why Choose <span className="bg-gradient-to-r from-[#7A5CFF] to-[#4A6EDB] bg-clip-text text-transparent">Mentora</span>?
        </h2>
        <p className="text-[#A8B0C3] text-xl mb-12">
          Empowering students and professionals to achieve their goals with smart planning and career guidance
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon; 
            return (
              <div 
                key={i} 
                className="bg-[#151B32]/70 border border-[#1F263C] rounded-2xl p-6 
                        hover:border-[#7A5CFF] hover:shadow-[0_0_20px_#7A5CFF44] 
                        transition-all duration-300 backdrop-blur-md flex flex-col items-center text-center gap-4"
              >
                {/* للايقونة */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#7A5CFF] to-[#4A6EDB] rounded-xl flex items-center justify-center shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>

               {/* العنوان */}
                <h3 className="text-white text-xl font-semibold">{b.title}</h3>

                {/*للوصف*/ }
                <p className="text-[#A8B0C3] text-sm leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* Feature Showcase */
function FeatureShowcase() {
  return (
    <section className="bg-[#0D1224] py-16">
      <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-16">
        {/* Career Builder */}
        <div className="bg-[#151B32]/70 border border-[#1F263C] rounded-2xl p-8 shadow-xl backdrop-blur-md hover:shadow-[0_0_25px_#7A5CFF44] transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-[#7A5CFF] to-[#4A6EDB] rounded-xl flex items-center justify-center mb-6 shadow-lg">
            <BriefcaseBusiness className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white text-3xl mb-4">Career Builder</h3>
          <p className="text-[#A8B0C3] mb-6">Navigate your professional path with confidence. Set career goals, discover opportunities, and build a roadmap that aligns with your aspirations and strengths.</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[#A8B0C3]"><CheckCircleMini /> Personalized career path recommendations</li>
            <li className="flex items-start gap-3 text-[#A8B0C3]"><CheckCircleMini /> Industry insights and market trends</li>
            <li className="flex items-start gap-3 text-[#A8B0C3]"><CheckCircleMini /> Skills gap analysis and development plans</li>
          </ul>
        </div>

        {/* Study Planner */}
        <div className="bg-[#151B32]/70 border border-[#1F263C] rounded-2xl p-8 shadow-xl backdrop-blur-md hover:shadow-[0_0_25px_#4A6EDB44] transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4A6EDB] to-[#7A5CFF] rounded-xl flex items-center justify-center mb-6 shadow-lg">
            <BookOpenText className="w-8 h-8 text-white" />

          </div>
          <h3 className="text-white text-3xl mb-4">Study Planner</h3>
          <p className="text-[#A8B0C3] mb-6">Organize your learning journey efficiently. Create study schedules, track assignments, and maintain a perfect balance between academics and personal growth.</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[#A8B0C3]"><CheckCircleMini /> Smart scheduling with deadline tracking</li>
            <li className="flex items-start gap-3 text-[#A8B0C3]"><CheckCircleMini /> Progress monitoring and performance analytics</li>
            <li className="flex items-start gap-3 text-[#A8B0C3]"><CheckCircleMini /> Resource organization and study materials hub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Features Grid */
function FeaturesGrid() {
  return (
    <section className="py-20 bg-[#0D1224]" id="features">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white text-4xl lg:text-5xl mb-4">Everything You Need to Succeed</h2>
        <p className="text-[#A8B0C3] text-lg mb-12">Powerful features designed to support your academic and professional growth.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {featuresGrid.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-[#151B32]/70 border border-[#1F263C] rounded-xl p-6 hover:shadow-[0_0_25px_#7A5CFF55] hover:border-[#7A5CFF] transition-all duration-300 backdrop-blur-md">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${f.color}22`, border: `1px solid ${f.color}33` }}>
                  <Icon className="w-7 h-7" stroke={f.color} />
                </div>
                <h3 className="text-white text-xl mb-3 tracking-wide">{f.title}</h3>
                <p className="text-[#A8B0C3] leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/*  Testimonials (الجديد) */
function Testimonials() {
  const [formData, setFormData] = useState({ name: "", role: "", comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New testimonial:", formData);
    setFormData({ name: "", role: "", comment: "" });
  };

  return (
    <section className="bg-[#0D1224] py-20">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-white text-4xl lg:text-5xl mb-8">
          What Our <span className="bg-gradient-to-r from-[#7A5CFF] to-[#4A6EDB] bg-clip-text text-transparent">Users Say</span>
        </h2>
        <p className="text-[#A8B0C3] text-xl mb-12 max-w-2xl mx-auto">
          Real experiences from students and professionals who transformed their journey with Mentora
        </p>

        {/* التقيمات*/}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((t, i) => (
            <div key={i} className="bg-[#151B32]/70 border border-[#1F263C] rounded-2xl p-8 relative backdrop-blur-sm hover:shadow-[0_0_25px_#7A5CFF44] transition-all duration-300">
              <Quote className="w-10 h-10 text-[#7A5CFF] absolute top-6 right-6 opacity-70" />

              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#7A5CFF]" />
                <div className="text-left">
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-[#A8B0C3] text-sm">{t.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#7A5CFF] fill-[#7A5CFF]" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[#A8B0C3] leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        {/* نموذج التقييم */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#151B32]/70 border border-[#1F263C] rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-white text-2xl mb-2 text-center">Share Your Experience</h3>
            <p className="text-[#A8B0C3] text-center mb-8">
              Tell us how Mentora helped you achieve your goals
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0D1224] border border-[#1F263C] text-white placeholder:text-[#A8B0C3]/40 focus:border-[#7A5CFF]"
                required              />
              <input
                type="text"
                placeholder="Your Role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0D1224] border border-[#1F263C] text-white placeholder:text-[#A8B0C3]/40 focus:border-[#7A5CFF]"
                required
              />
              <textarea
                placeholder="Your Experience"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0D1224] border border-[#1F263C] text-white placeholder:text-[#A8B0C3]/40 focus:border-[#7A5CFF] min-h-[120px]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#7A5CFF] hover:bg-[#6244e8] text-white py-4 rounded-xl transition-all"
              >
                Submit Your Testimonial
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer */
function Footer() {
return (
    <footer className="bg-[#0D1224] border-t border-[#1F263C] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 bg-gradient-to-br from-[#7A5CFF] to-[#4A6EDB] rounded-lg
                      flex items-center justify-center shadow-md"
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-2xl font-semibold">Mentora</span>
            </div>

            <p className="text-[#A8B0C3] text-sm leading-relaxed">
              Empowering students and professionals to achieve their dreams.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="text-[#A8B0C3] hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#A8B0C3] hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Github" className="text-[#A8B0C3] hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-[#A8B0C3] hover:text-[#7A5CFF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-mentora" className="text-[#A8B0C3] hover:text-[#7A5CFF] transition-colors">
                  Why Mentora
                </a>
              </li>
              <li>
                <a href="/features" className="text-[#A8B0C3] hover:text-[#7A5CFF] transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4 font-semibold tracking-wide">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/study-tips" className="text-[#A8B0C3] hover:text-[#4A6EDB] transition-colors">
                  Study Tips
                </a>
              </li>
              <li>
                <a href="/career-advice" className="text-[#A8B0C3] hover:text-[#4A6EDB] transition-colors">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="/blog" className="text-[#A8B0C3] hover:text-[#4A6EDB] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4 font-semibold tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#A8B0C3]">
                <Mail className="w-4 h-4 text-[#7A5CFF]" />
                <a href="mailto:support@mentora.com" className="hover:text-white">support@mentora.com</a>
              </li>

              <li className="flex items-center gap-2 text-[#A8B0C3]">
                <Phone className="w-4 h-4 text-[#7A5CFF]" />
                <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a>
              </li>

              <li className="flex items-center gap-2 text-[#A8B0C3]">
                <MapPin className="w-4 h-4 text-[#7A5CFF]" />
                <span>Global Platform</span>
              </li>
            </ul>
          </div>

        </div>

        

      </div>
    </footer>
  );
}

/* الصفحة الرئيسية Home */
export default function Home() {
  return (
    <div className="bg-[#0D1224] text-white">
      <Hero />
      <ProjectSummary />
      <WhyMentora />
      <FeatureShowcase />
      <FeaturesGrid />
      <Testimonials />
      <Footer />
    </div>
  );
}

/*  بيانات تجريبية */
const testimonialsData = [
  {
    name: "Sarah Ahmed",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    text: "Mentora helped me organize my studies and plan my career path. The personalized recommendations were spot-on!",
  },
  {
    name: "Mohammed Ali",
    role: "Engineering Graduate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    text: "Thanks to Mentora, I landed my dream job. The career builder feature is incredible and helped me prepare for interviews.",
  },
  {
    name: "Layla Hassan",
    role: "Medical Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    text: "The study planner is a game-changer! I can now balance my coursework, research, and personal life effectively.",
  },
];

