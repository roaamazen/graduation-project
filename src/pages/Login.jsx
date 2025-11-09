import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation for Email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Email must include @";
    }

    // Validation for Password
 if (!password) {
    newErrors.password = "Password is required";
  } else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
  }

  setErrors(newErrors);

  // هاي رسالة بتظهر لمن يكون كلشي تمام راح نشيلها بعدي بس عشان التشيك
  if (Object.keys(newErrors).length === 0) {
    alert("Login successful!");
  }
};

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        <div className="relative sm:max-w-sm w-full">
          {/* Background cards */}
          <div className="card shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6" style={{ backgroundColor: "#6F3D57" }}></div>
          <div className="card shadow-lg w-full h-full rounded-3xl absolute transform rotate-6" style={{ backgroundColor: "#415e86ff" }}></div>

          <div className="relative w-full rounded-3xl px-6 py-8 bg-gray-100 shadow-md">
            <h2 className="text-center text-2xl font-semibold text-gray-700 italic tracking-wide drop-shadow-md">
              Login
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className={`pl-4 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-[#EDE6F2] focus:ring-0 ${errors.email ? "border-2 border-red-500" : ""}`}
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
                  className={`pl-4 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-[#EDE6F2] focus:ring-0 ${errors.password ? "border-2 border-red-500" : ""}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label htmlFor="remember_me" className="inline-flex items-center cursor-pointer">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="#" className="text-sm text-gray-600 underline hover:text-gray-900">
                  Forgot password?
                </Link>
              </div>

              {/* Login button */}
              <div>
                <button className="bg-[#6F3D57] w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Login
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center text-center mt-6">
                <hr className="border-gray-300 border-1 w-full rounded-md"/>
                <span className="block font-medium text-sm text-gray-600 w-full">Or continue with</span>
                <hr className="border-gray-300 border-1 w-full rounded-md"/>
              </div>

              {/* Social buttons */}
              <div className="flex justify-center mt-6 gap-4">
                <button className="bg-[#415e86ff] p-4 rounded-full text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <FaFacebookF size={20} /> 
                </button>
                
                <button className="bg-[#6F3D57] p-4 rounded-full text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <FaGoogle size={20} />
                </button>
              </div>

              {/* Signup link */}
              <div className="mt-6 flex justify-center items-center">
                <span className="mr-2 text-gray-700">New here?</span>
                <Link to="/signup" className="text-blue-500 font-medium hover:underline transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
