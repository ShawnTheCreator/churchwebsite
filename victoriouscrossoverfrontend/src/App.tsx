import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Ensure this path is correct
import Login from './pages/Login'; // Ensure this path is correct
import Course from './pages/Course'; // Ensure this path is correct
import SignUp from './pages/SignUp';
import CourseDetails from './pages/CourseDetails';
import LessonDetail from './pages/LessonDetail';
import Admin from './pages/Admin'
import { AuthProvider } from './components/AppContext'; // Import AuthProvider
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Wrap the Router with AuthProvider */}
      <AuthProvider>
        <Router>
          <Routes>
            {/* Define routes and their corresponding components */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/course" element={<Course />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/course/:courseId/lesson/:lessonId" element={<LessonDetail />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
