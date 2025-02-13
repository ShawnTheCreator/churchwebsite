import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EvangelismCourseImage from '../assets/images/EvangelismCourse.jpg'; // Import images
import WordOfGodCourseImage from '../assets/images/WordOfGodCourse.jpg';
import WomensMinistry from '../assets/images/women.jpeg';
import BornAgain from '../assets/images/BornAgain.jpg';
import Prophetic from '../assets/images/Prophetic.jpg';


interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  completionPercentage: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Passion for God's word",
    description: 'Deepen your understanding of the Scriptures and biblical teachings.',
    imageUrl: WordOfGodCourseImage,
    completionPercentage: 0,
  },
  {
    id: 2,
    title: 'Evangelism',
    description: 'Learn the principles of evangelism and spreading the Word of God.',
    imageUrl: EvangelismCourseImage,
    completionPercentage: 0,
  },
 
  {
    id: 3,
    title: 'Womens Ministry',
    description: 'Deepen your understanding of the Scriptures and biblical teachings.',
    imageUrl: WomensMinistry,
    completionPercentage: 0,
  },
  {
    id: 4,
    title: 'Priest hood',
    description: 'Deepen your understanding of the Scriptures and biblical teachings.',
    imageUrl: Prophetic,
    completionPercentage: 0,
  },
  {
    id: 5,
    title: 'Born Again',
    description: 'Deepen your understanding of the Scriptures and biblical teachings.',
    imageUrl: BornAgain,
    completionPercentage: 0,
  }
];

const CourseList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Name');

  // Filter courses based on search term and status
  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedStatus === 'All' || course.title.toLowerCase().includes(selectedStatus.toLowerCase()))
    );
  });

  // Sort courses based on selected sorting option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (selectedSort === 'Name') {
      return a.title.localeCompare(b.title);
    } else if (selectedSort === 'Last Accessed') {
      // Here, you can implement sorting by last accessed if you have a last accessed field.
      return 0; // Placeholder sorting, adjust as needed
    }
    return 0;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-12 md:p-24">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 mb-8">
    {/* Search Box */}
    <input
      type="text"
      placeholder="Search for a course..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-gray-300 p-2 rounded-lg w-full sm:w-auto"
    />

    {/* Status Dropdown */}
    <select
      value={selectedStatus}
      onChange={(e) => setSelectedStatus(e.target.value)}
      className="border border-gray-300 p-2 rounded-lg w-full sm:w-auto"
    >
      <option value="All">All</option>
      <option value="In Progress">In Progress</option>
      <option value="Future">Future</option>
      <option value="Past">Past</option>
      <option value="Starred">Starred</option>
    </select>

    {/* Sort Dropdown */}
    <select
      value={selectedSort}
      onChange={(e) => setSelectedSort(e.target.value)}
      className="border border-gray-300 p-2 rounded-lg w-full sm:w-auto"
    >
      <option value="Name">Sort by Name</option>
      <option value="Last Accessed">Sort by Last Accessed</option>
    </select>
  </div>

  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Courses</h1>

  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
    {sortedCourses.map((course) => (
      <div
        key={course.id}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-[300px] sm:w-[90%] md:w-auto mx-auto"
      >
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{course.title}</h2>
          <p className="text-gray-600 mb-6">{course.description}</p>
          <Link to={`/course/${course.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-4">
              View Details
            </button>
          </Link>

          {/* Completion Percentage */}
          <div className="flex items-center justify-between text-gray-600">
            <span className="text-sm">Completion: {course.completionPercentage}%</span>
            <div className="w-full bg-gray-300 h-2 rounded-full ml-4">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${course.completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default CourseList;
