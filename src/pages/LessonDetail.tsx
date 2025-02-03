import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Mock data for lessons
const lessons = [
  {
    id: 1,
    title: 'Lesson 1: YOU AND THE BIBLE',
    description: 'Overview of biblical history.',
    content: 'This lesson dives deep into how the Bible was written.',
    videoUrl: 'https://www.youtube.com/embed/B5wCziuqnwk',
    pdfUrl: 'https://online.fliphtml5.com/bcprq/ersg/',
  },
  {
    id: 2,
    title: 'Lesson 2: THE ORIGIN OF THE BIBLE',
    description: 'Understanding how the Bible was compiled.',
    content: 'This lesson explores the formation and preservation of the Bible.',
    videoUrl: 'https://www.youtube.com/embed/fnlp3--RG3c?start=278', // Replace with actual video URL
    pdfUrl: 'https://online.fliphtml5.com/bcprq/wpag/', // Replace with actual PDF URL
  },
];

const LessonDetails: React.FC = () => {
  const { courseId, lessonId } = useParams() as { courseId: string; lessonId: string };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Find the lesson based on lessonId
  const lesson = lessons.find((l) => l.id === Number(lessonId));

  useEffect(() => {
    if (lesson?.pdfUrl) {
      setIsLoading(false);
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-2xl text-gray-700">Lesson not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 lg:px-12"> {/* Adjusted padding for better spacing */}
        <div className="w-full mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 md:p-8 w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{lesson.title}</h1>
            <p className="text-gray-600 mb-6">{lesson.description}</p>

            {lesson.videoUrl && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Video Lesson</h2>
                <div className="relative w-full">
                  <div className="aspect-video md:aspect-[16/9]"> {/* Responsive video container */}
                    <iframe
                      src={lesson.videoUrl}
                      title="Lesson Video"
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}

            {lesson.pdfUrl && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Study Materials</h2>
                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                  {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
                    </div>
                  ) : (
                    <div className="w-full">
                      <iframe
                        src={lesson.pdfUrl}
                        className="w-full h-[600px] md:h-[800px] lg:h-[1000px] rounded-lg" // Increased height at different breakpoints
                        title="Flipped PDF"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {lesson.content}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Go Back
              </button>
              <Link
                to={`/course/${courseId}`}
                className="w-full sm:w-auto text-center bg-gray-100 text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Back to Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
