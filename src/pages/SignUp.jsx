import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Full Name validation
    if (!fullName) newErrors.fullName = "Full name is required";

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Email must include @";
    }

    // Password validation
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Account created successfully!");
     
    }
  };

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        <div className="relative sm:max-w-sm w-full">
          {/* Background cards */}
          <div
            className="card shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
            style={{ backgroundColor: "#6F3D57" }}
          ></div>
          <div
            className="card shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
            style={{ backgroundColor: "#415e86ff" }}
          ></div>

          <div className="relative w-full rounded-3xl px-6 py-8 bg-gray-100 shadow-md">
            <h2 className="text-center text-2xl font-semibold text-gray-700 italic tracking-wide drop-shadow-md">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`pl-4 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-[#EDE6F2] focus:ring-0 ${
                    errors.fullName ? "border-2 border-red-500" : ""
                  }`}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className={`pl-4 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-[#EDE6F2] focus:ring-0 ${
                    errors.email ? "border-2 border-red-500" : ""
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className={`pl-4 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-[#EDE6F2] focus:ring-0 ${
                    errors.password ? "border-2 border-red-500" : ""
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Sign Up button */}
              <div>
                <button className="bg-[#6F3D57] w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Create Account
                </button>
              </div>

              {/* Login link */}
              <div className="mt-6 flex justify-center items-center">
                <span className="mr-2 text-gray-700">Already have an account?</span>
                <Link
                  to="/login"
                  className="text-blue-500 font-medium hover:underline transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
