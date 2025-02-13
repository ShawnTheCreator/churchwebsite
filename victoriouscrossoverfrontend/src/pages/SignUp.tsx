import React, { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import Navbar from "../components/Navbar";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleRepeatPasswordVisibility = () =>
    setShowRepeatPassword(!showRepeatPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidLength = formData.password.length >= 8;
  const hasUppercase = /[A-Z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!formData.name || !formData.email || !formData.password) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch("https://churchwebsite-xout.onrender.com/auth/signup", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setErrorMessage("");
        setSuccessMessage("Signup successful! You can now log in.");
        setFormData({
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        });
      } else {
        setErrorMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-24">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-[95%] sm:max-w-xl md:max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Sign Up</h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Repeat Password Input with Toggle */}
          <div className="mb-4">
            <label htmlFor="repeatPassword" className="block text-sm font-semibold text-gray-700">
              Repeat Password
            </label>
            <div className="relative">
              <input
                type={showRepeatPassword ? "text" : "password"}
                id="repeatPassword"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 pr-10"
                placeholder="Repeat your password"
                required
              />
              <button
                type="button"
                onClick={toggleRepeatPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showRepeatPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Password Validation Checkboxes */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={isValidLength}
                readOnly
                className="form-checkbox text-blue-500"
              />
              <span className="text-sm">Password is at least 8 characters</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={hasUppercase}
                readOnly
                className="form-checkbox text-blue-500"
              />
              <span className="text-sm">Contains at least one uppercase letter</span>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={hasNumber}
                readOnly
                className="form-checkbox text-blue-500"
              />
              <span className="text-sm">Contains at least one number</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
