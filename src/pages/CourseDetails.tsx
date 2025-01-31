import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EvangelismCourseImage from '../assets/images/EvangelismCourse.jpg';
import WordOfGodCourseImage from '../assets/images/WordOfGodCourse.jpg';
import WomensMinistry from '../assets/images/Women2.jpg';
import BornAgain from '../assets/images/BornAgain.jpg';
import Prophetic from '../assets/images/Prophetic.jpg';

const courses = [
  {
    id: 1,
    title: 'Word of God',
    description: 'Understand biblical teachings.',
    details: 'Detailed content about Word of God.',
    imageUrl: WordOfGodCourseImage,
    lessons: [
      { id: 1, title: 'Lesson 1: YOU AND THE BIBLE', description: 'Overview of biblical history.' },
      { id: 2, title: 'Lesson 2: ANATOMY OF THE BIBLE', description: 'Understanding major biblical principles.' },
      { id: 3, title: 'Lesson 3: A SURVEY OF THE BIBLE', description: 'Understanding major biblical principles.' },
      { id: 4, title: "Lesson 4: THE TAPESTRY OF GOD'S WORD", description: 'Understanding major biblical principles.' },
      { id: 5, title: "Lesson 5: THE AUTHORITY OF GOD'S WORD", description: 'Understanding major biblical principles.' },
      { id: 6, title: "Lesson 6: THE PURPOSE OF GOD'S WORD", description: 'Understanding major biblical principles.' },
      { id: 7, title: "Lesson 7: BECOMING A STUDENT OF GOD'S WORD", description: 'Understanding major biblical principles.' },
      { id: 8, title: "Lesson 8: DIGGING FOR HIDDEN TREASURE", description: 'Understanding major biblical principles.' },
      { id: 9, title: "Lesson 9: PRINCIPLES OF BIBLE STUDY", description: 'Understanding major biblical principles.' },
      { id: 10, title: "Lesson 10: ESTABLISHING A BIBLICAL WORLDVIEW", description: 'Understanding major biblical principles.' }
    ],   
  },
  {
    id: 2,
    title: 'Evangelism',
    description: 'Learn about spreading the Word.',
    details: 'Detailed content about Evangelism.',
    imageUrl: EvangelismCourseImage,
    lessons: [
      { id: 1, title: 'Lesson 1: Sharing Faith', description: 'How to effectively share your faith.' },
      { id: 2, title: 'Lesson 2: Engaging Communities', description: 'Connecting with local communities.' },
    ],
  },
  {
    id: 3,
    title: "Women's Ministry",
    description: 'Manage church activities.',
    details: 'Detailed content about Church Management.',
    imageUrl: WomensMinistry,
    lessons: [
      { id: 1, title: 'Lesson 1: Empowering Women', description: 'Fostering leadership among women.' },
      { id: 2, title: 'Lesson 2: Building Support Networks', description: 'Creating strong community bonds.' },
    ],
  },
  {
    id: 4,
    title: 'Prophetic',
    description: 'Understand biblical teachings.',
    details: 'Detailed content about Word of God.',
    imageUrl: Prophetic,
    lessons: [
      { id: 1, title: 'Lesson 1: Prophecy in History', description: 'Analyzing biblical prophecies.' },
      { id: 2, title: 'Lesson 2: Modern Applications', description: 'Relevance of prophecy today.' },
    ],
  },
  {
    id: 5,
    title: 'Born Again',
    description: 'Learn about spreading the Word.',
    details: 'Detailed content about Evangelism.',
    imageUrl: BornAgain,
    lessons: [
      { id: 1, title: 'Lesson 1: What It Means', description: 'Understanding the concept of being born again.' },
      { id: 2, title: 'Lesson 2: Living a New Life', description: 'Steps to living as a born-again believer.' },
    ],
  },
];

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((course) => course.id === parseInt(id || '', 10));

  if (!course) {
    return <div className="text-center text-red-500">Course not found!</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>
            <p className="text-gray-800">{course.details}</p>
            <button
              onClick={() => window.history.back()}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Lessons Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lessons</h2>
          <ul className="space-y-4">
            {course.lessons.map((lesson) => (
              <li
                key={lesson.id}
                className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
              >
               <Link to={`/course/${course.id}/lesson/${lesson.id}`} className="block">
                 <h3 className="text-lg font-semibold text-gray-800">{lesson.title}</h3>
               </Link>
                <p className="text-gray-600">{lesson.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
