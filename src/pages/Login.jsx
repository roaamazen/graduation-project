import React, { useState } from "react";
import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { GraduationCap } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation
    const isValid =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password);

    // يمنع الsubmit لو في خطأ
    if (!isValid) {
      setPasswordError(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and a special character."
      );
      return; 
    }

    setPasswordError(""); // لو صح

    console.log("Login:", { email, password });
    alert("Login submitted (check console)");
  };

  const goBack = () => {
    window.location.href = "/";
  };

  const goToSignup = () => {
    window.location.href = "/signup";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1224] via-[#151B32] to-[#1E2A78] flex items-center justify-center p-4 relative text-[#E4E7EB]">

      {/* Back Button */}
      <button
        onClick={goBack}
        className="absolute top-6 left-6 text-[#A8B0C3] hover:text-[#7A5CFF] flex items-center gap-2 transition-colors"
      >
        <FiArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>

      <div className="w-full max-w-md relative">

        {/* Mentora Logo Outside Card */}
        <div className="flex items-center justify-center mb-6 relative z-10">
          <div className="w-12 h-12 bg-[#7A5CFF] rounded-lg flex items-center justify-center shadow-lg">
            <GraduationCap size={30} strokeWidth={2} />
          </div>
          <span className="text-white text-2xl font-semibold ml-2">Mentora</span>
        </div>

        {/* Login Card */}
        <div className="bg-[#151B32]/70 border border-[#1F263C] backdrop-blur-sm rounded-2xl shadow-2xl p-8 relative z-0">

          <h2 className="text-white text-3xl mb-2 text-center">Welcome Back</h2>
          <p className="text-[#A8B0C3] text-center mb-6">Login to continue your journey</p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-[#A8B0C3] mb-2 block">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A6EDB]" />
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-11 w-full px-4 py-3 rounded-xl bg-[#0D1224] border border-[#1F263C] text-white placeholder:text-[#A8B0C3]/40 focus:border-[#7A5CFF] focus:ring-2 focus:ring-[#7A5CFF] outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-[#A8B0C3] mb-2 block">
                Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A6EDB]" />

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-11 w-full px-4 py-3 rounded-xl bg-[#0D1224] border border-[#1F263C] text-white placeholder:text-[#A8B0C3]/40 focus:border-[#7A5CFF] focus:ring-2 focus:ring-[#7A5CFF] outline-none"
                />
              </div>

              {/* Error Message */}
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#A8B0C3] cursor-pointer">
                <input type="checkbox" className="rounded border-[#1F263C] bg-[#0D1224]" />
                Remember me
              </label>
              <button type="button" className="text-[#7A5CFF] hover:text-[#A8B0C3]">Forgot Password?</button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#7A5CFF] hover:bg-[#6244e8] text-white py-3 rounded-xl font-medium shadow-lg transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-6 text-center">
            <p className="text-[#A8B0C3]">
              Don't have an account?{" "}
              <button onClick={goToSignup} className="text-[#4A6EDB] hover:text-[#7A5CFF]">Sign Up</button>
            </p>
          </div>
        </div>

        {/* Decorative blurred circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#7A5CFF]/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#4A6EDB]/20 rounded-full blur-xl" />
      </div>
    </div>
  );
}
