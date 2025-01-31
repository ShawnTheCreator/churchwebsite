import React, { useState } from 'react';

interface Lesson {
  id: number;
  title: string;
  notes: string;
  completed: boolean;
}

const lessons: Lesson[] = [
  { id: 1, title: 'Introduction to Evangelism', notes: 'Understand the basics of evangelism and its importance.', completed: false },
  { id: 2, title: 'The Word of God', notes: 'Explore the significance of the Word of God in our lives.', completed: false },
  { id: 3, title: 'Practical Evangelism Tips', notes: 'Learn practical strategies for effective evangelism.', completed: false },
];

const LessonNotes: React.FC = () => {
  const [lessonList, setLessonList] = useState(lessons);

  const markAsCompleted = (id: number) => {
    setLessonList((prev) =>
      prev.map((lesson) =>
        lesson.id === id ? { ...lesson, completed: true } : lesson
      )
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Lesson Notes</h1>
      <div className="space-y-6">
        {lessonList.map((lesson) => (
          <div
            key={lesson.id}
            className={`bg-white rounded-lg shadow-lg p-6 transition ${
              lesson.completed ? 'opacity-70' : 'hover:shadow-xl'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {lesson.title}
            </h2>
            <p className="text-gray-600 mb-4">{lesson.notes}</p>
            {!lesson.completed ? (
              <button
                onClick={() => markAsCompleted(lesson.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Mark as Completed
              </button>
            ) : (
              <span className="text-green-700 font-semibold">
                Lesson Completed!
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonNotes;
