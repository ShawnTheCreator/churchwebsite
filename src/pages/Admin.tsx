import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Lesson {
  title: string;
  description: string;
}

const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  // Course and lessons state
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [lessons, setLessons] = useState<Lesson[]>([{ title: '', description: '' }]); // Explicitly define the state type

  // Handle adding new lesson
  const addLesson = () => {
    setLessons([...lessons, { title: '', description: '' }]);
  };

  // Handle lesson input change
  const handleLessonChange = (index: number, field: string, value: string) => {
    const updatedLessons = [...lessons];
    updatedLessons[index][field as keyof Lesson] = value; // TypeScript will understand that `field` is a key of `Lesson`
    setLessons(updatedLessons);
  };

  // Handle course form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For now, log the data. In a real app, you'd submit it to a backend.
    console.log({
      courseTitle,
      courseDescription,
      lessons,
    });

    // Redirect to course page (or wherever needed)
    navigate('/admin/courses');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Course</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700" htmlFor="courseTitle">
              Course Title
            </label>
            <input
              type="text"
              id="courseTitle"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700" htmlFor="courseDescription">
              Course Description
            </label>
            <textarea
              id="courseDescription"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              required
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lessons</h2>
          {lessons.map((lesson, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <label className="block text-lg font-semibold text-gray-700" htmlFor={`lessonTitle-${index}`}>
                  Lesson Title
                </label>
                {index > 0 && (
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => {
                      const updatedLessons = lessons.filter((_, i) => i !== index);
                      setLessons(updatedLessons);
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
              <input
                type="text"
                id={`lessonTitle-${index}`}
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={lesson.title}
                onChange={(e) => handleLessonChange(index, 'title', e.target.value)}
                placeholder="Lesson Title"
                required
              />
              <textarea
                id={`lessonDescription-${index}`}
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                value={lesson.description}
                onChange={(e) => handleLessonChange(index, 'description', e.target.value)}
                placeholder="Lesson Description"
                required
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addLesson}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Add Lesson
          </button>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Save Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
