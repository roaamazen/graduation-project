import React, { useEffect, useState } from "react";
import { Mail, ArrowLeft, GraduationCap } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [user, setUser] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [isSendingLink, setIsSendingLink] = useState(false);

  const mockUsers = [
    { email: "test@example.com", name:" رؤى مازن", picture: null },
    { email: "user@mentora.com", name: "مازن بدران", picture: null }
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

  const goBack = () => alert("Back to Home");
  const goToLogin = () => alert("Navigate to Login");

  const handleSendResetLink = (e) => {
    if (e) e.preventDefault();

    setIsSendingLink(true);
    setTimeout(() => {
      setIsSendingLink(false);
      alert("Reset link sent to your email! (Demo)");
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

        <div className="bg-white border-2 border-[#A4C3B2] shadow-xl rounded-2xl p-8">
          <h2 className="text-[#2C3E3F] text-3xl mb-2 text-center">Reset Password</h2>
          <p className="text-[#6B9080] text-center mb-6">
            Enter your email to receive a reset link
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
                  disabled={isSendingLink}
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

            <button
              onClick={handleSendResetLink}
              disabled={isSendingLink || !isValidEmail}
              className={`w-full mt-2 py-3 rounded-xl font-medium shadow-lg transition ${
                isSendingLink || !isValidEmail
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#6B9080] hover:bg-[#577466] text-white"
              }`}
            >
              {isSendingLink ? "Sending..." : "Send Reset Link"}
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
      
    </div>
  );
}