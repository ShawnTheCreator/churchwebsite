import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AppContext';
import Navbar from '../components/Navbar';
import { Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://fancy-bees-scream.loca.lt/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user.name);
        setUser(data.user.name);
        setSuccessMessage('Login successful! Redirecting...');
        setErrorMessage('');
        setTimeout(() => {
          navigate(data.user.role === 'admin' ? '/admin' : '/');
        }, 1500);
      } else {
        setErrorMessage(data.message || 'Invalid email or password.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(''); // Clear previous errors
    setSuccessMessage('');
    await handleLogin();
  };

  return (
    <div>
  <Navbar />
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h1>

      {successMessage && <div className="mb-4 text-center text-green-600 font-medium">{successMessage}</div>}
      {errorMessage && <div className="mb-4 text-center text-red-600 font-medium">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 pr-12"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-11 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </div>
        {errorMessage && (
          <div className="mt-4 text-center text-red-600 font-medium">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  </div>
</div>

  );
};

export default Login;
