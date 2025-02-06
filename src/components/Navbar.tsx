import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AppContext";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Logo from "../assets/images/logo.jpeg";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      setUser(null);
    }
  }, [setUser]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("authToken");
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-white border-gray-200 shadow-md px-6 py-2 md:py-2 fixed top-0 z-50">
      <div className="w-full max-w-full flex items-center justify-between px-4">
        <div className="flex w-full items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={Logo}
                className="h-12 w-12 md:h-20 md:w-20 rounded-full object-cover mt-1 md:mt-0 ml-[-25px] sm:ml-[-50px] md:ml-0"
                alt="Logo"
              />
              <span className="text-xs md:text-2xl font-semibold whitespace-nowrap text-black mt-2 md:mt-0">
                Victorious Crossover
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Items */}
          <div className={`${isMobileMenuOpen ? "absolute top-16 left-0 right-0 bg-white" : "hidden"} md:flex md:items-center md:space-x-8`}>
            <ul className="font-medium flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0 bg-white w-full md:w-auto">
              <li className="py-2 md:py-0">
                <Link to="/" className="block text-black hover:text-blue-700">
                  Home
                </Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to="/Course" className="block text-black hover:text-blue-700">
                  Resources
                </Link>
              </li>

              {user ? (
                <li className="relative py-2 md:py-0">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 text-black hover:text-blue-700"
                  >
                    <span>Welcome, {user}</span>
                    {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-1 z-50">
                      <li>
                        <Link to="/profile" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li className="py-2 md:py-0">
                  <Link to="/login" className="inline-block bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
