import React, { useEffect, useState, useRef } from "react";
import { Mail, Lock, ArrowLeft, GraduationCap } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [user, setUser] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef([]);
  const [cooldown, setCooldown] = useState(0);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  const mockUsers = [
    { email: "test@example.com", name: "أحمد محمد", picture: null },
    { email: "user@mentora.com", name: "سارة علي", picture: null }
  ];

  const validateEmailFormat = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  useEffect(() => {
    if (!email) {
      setUser(null);
      setEmailError("");
      setIsValidEmail(false);
      return;
    }

    const t = setTimeout(async () => {
      if (!validateEmailFormat(email)) {
        setEmailError("Please enter a valid email address");
        setUser(null);
        setIsValidEmail(false);
        return;
      }

      setIsCheckingEmail(true);
      setTimeout(() => {
        const foundUser = mockUsers.find(u => u.email === email);
        if (foundUser) {
          setUser(foundUser);
          setEmailError("");
          setIsValidEmail(true);
        } else {
          setUser(null);
          setEmailError("No account found with this email");
          setIsValidEmail(false);
        }
        setIsCheckingEmail(false);
      }, 500);
    }, 500);

    return () => clearTimeout(t);
  }, [email]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          clearInterval(id);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  const goBack = () => alert("Back to Home");
  const goToLogin = () => alert("Navigate to Login");

  const handleSendOtp = async () => {
    if (!isValidEmail) {
      setEmailError("Please enter a valid registered email");
      return;
    }
    setIsSendingOtp(true);
    setTimeout(() => {
      setIsSendingOtp(false);
      setCooldown(60);
      alert(`OTP sent to ${email}! (Demo: use 123456)`);
    }, 1000);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData("text");
    const digits = pasted.replace(/\D/g, "").slice(0, 6).split("");
    if (digits.length === 0) return;
    const newOtp = ["", "", "", "", "", ""];
    for (let i = 0; i < digits.length; i++) newOtp[i] = digits[i];
    setOtp(newOtp);
    const nextIndex = digits.length >= 6 ? 5 : digits.length;
    otpRefs.current[nextIndex]?.focus();
  };

  const validatePasswordRules = (pw) => {
    return pw.length >= 8;
  };

  const handleResetPassword = (e) => {
    if (e) e.preventDefault();
    setPasswordError("");
    setConfirmPasswordError("");

    if (!validatePasswordRules(password)) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    const otpString = otp.join("");
    if (otpString.length !== 6) {
      alert("Please enter complete OTP");
      return;
    }

    setIsResettingPassword(true);
    setTimeout(() => {
      setIsResettingPassword(false);
      alert("Password reset successfully! (Demo)");
      goToLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F6FFF8] flex items-center justify-center p-4 relative text-[#2C3E3F]">
      <button
        onClick={goBack}
        className="absolute top-6 left-6 text-[#6B9080] hover:text-[#A4C3B2] flex items-center gap-2 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>

      <div className="w-full max-w-md relative">
        <div className="flex items-center justify-center mb-6 relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-[#6B9080] to-[#A4C3B2] rounded-lg flex items-center justify-center shadow-md">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-[#2C3E3F] text-2xl font-semibold ml-2">Mentora</span>
        </div>

        <div className="bg-white border border-[#A4C3B2] shadow-xl rounded-2xl p-8">
          <h2 className="text-[#2C3E3F] text-3xl mb-2 text-center">Reset Password</h2>
          <p className="text-[#6B9080] text-center mb-6">
            Enter your email to receive an OTP and set a new password
          </p>

          <div className="space-y-6">
            {user && (
              <div className="flex gap-2 bg-[#6B9080]/10 p-2 rounded-xl items-center mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-[#6B9080] font-semibold">
                  {user.name?.charAt(0) ?? "U"}
                </div>
                <div className="text-sm">
                  <strong className="font-semibold text-[#2C3E3F]">{user.name}</strong>
                  <p className="text-[#6B9080] text-xs">{user.email}</p>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-[#6B9080] mb-2 block">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B9080]" />
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  className="pl-11 w-full px-4 py-3 rounded-xl bg-[#F6FFF8] border border-[#A4C3B2] text-[#2C3E3F] placeholder:text-[#6B9080]/40 focus:border-[#6B9080] focus:ring-2 focus:ring-[#6B9080] outline-none"
                  disabled={isSendingOtp || isResettingPassword}
                />
                {isCheckingEmail && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B9080]">
                    checking...
                  </div>
                )}
              </div>
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              {isValidEmail && !emailError && (
                <p className="text-green-600 text-sm mt-1">✓ Valid email</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-[#6B9080] mb-2 block">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B9080]" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 w-full px-4 py-3 rounded-xl bg-[#F6FFF8] border border-[#A4C3B2] text-[#2C3E3F] placeholder:text-[#6B9080]/40 focus:border-[#6B9080] focus:ring-2 focus:ring-[#6B9080] outline-none"
                  disabled={isResettingPassword}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#6B9080] hover:text-[#2C3E3F]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm text-[#6B9080] mb-2 block">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B9080]" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-11 w-full px-4 py-3 rounded-xl bg-[#F6FFF8] border border-[#A4C3B2] text-[#2C3E3F] placeholder:text-[#6B9080]/40 focus:border-[#6B9080] focus:ring-2 focus:ring-[#6B9080] outline-none"
                  disabled={isResettingPassword}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#6B9080] hover:text-[#2C3E3F]"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-[#6B9080] mb-2 block">OTP</label>
              <div className="flex items-center gap-3" onPaste={handleOtpPaste}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[i]}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(e, i)}
                    className="w-12 h-12 text-center rounded-md border border-[#A4C3B2] text-lg focus:outline-none focus:border-[#6B9080] focus:ring-2 focus:ring-[#6B9080]"
                    disabled={isResettingPassword}
                  />
                ))}

                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={!isValidEmail || cooldown > 0 || isSendingOtp}
                  className={`ml-2 px-3 py-2 rounded-xl text-sm font-medium shadow transition ${
                    !isValidEmail || cooldown > 0 || isSendingOtp
                      ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                      : "bg-[#6B9080] text-white hover:bg-[#577466]"
                  }`}
                >
                  {isSendingOtp ? "Sending..." : cooldown > 0 ? `${cooldown}s` : "Get OTP"}
                </button>
              </div>
              <p className="text-xs text-[#6B9080]">
                Enter the 6-digit OTP sent to your email
              </p>
            </div>

            <button
              onClick={handleResetPassword}
              disabled={
                isResettingPassword ||
                !isValidEmail ||
                password.length < 1 ||
                confirmPassword.length < 1
              }
              className={`w-full mt-2 py-3 rounded-xl font-medium shadow-lg transition ${
                isResettingPassword || !isValidEmail || !password || !confirmPassword
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#6B9080] hover:bg-[#577466] text-white"
              }`}
            >
              {isResettingPassword ? "Resetting..." : "Reset Password"}
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[#6B9080]">
              Remembered your password?{" "}
              <button onClick={goToLogin} className="text-[#2C3E3F] hover:text-[#6B9080] font-medium">
                Login
              </button>
            </p>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-[#A4C3B2]/40 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#6B9080]/30 rounded-full blur-xl" />
      </div>
      
      <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow text-xs text-[#6B9080] max-w-xs">
        <p className="font-semibold mb-1">📝 Demo Instructions:</p>
        <p>• Try: test@example.com or user@mentora.com</p>
        <p>• Demo OTP: 123456</p>
        <p>• Password: min 8 characters</p>
      </div>
    </div>
  );
}