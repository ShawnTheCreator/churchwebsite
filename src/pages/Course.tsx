import React from "react";
import Navbar from '../components/Navbar';
import CourseList from '../components/CourseList';
import { useAuth } from "../components/AppContext"; // Import your custom hook
import "../assets/style/Course.css"; // Direct import without styles

const Course: React.FC = () => {
  const { user } = useAuth(); // Accessing user from context using the custom hook

  return (
    <div className="relative">
      {/* Navbar always shows */}
      <Navbar />

      {/* Content with conditional blur based on login status */}
      <div className={`mt-16 ${!user ? 'filter blur-sm pointer-events-none' : ''}`}>
        {/* Conditionally render the CourseList */}
        <CourseList />
      </div>

      {/* Login Popup: This will not be blurred */}
      {!user && (
        <div className="login-popup">
          <div className="popup-content">
            <p>Login to see the content</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
