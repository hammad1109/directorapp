import React, { useState, useEffect } from 'react';
import './uploadpaper.css';

const UploadPaper = () => {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from an API
    fetch('https://api.example.com/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleViewCourse = (courseId) => {
    console.log('Viewing course:', courseId);
  };

  return (
    <div className="upload-paper-container">
      <div className="header">
        <div style={{textAlign:'center'}} className="uploaded-paper">
          Uploaded Paper
        </div>
        <div className="welcome-message">
          Welcome Dr. Jamil Sawaar!
        </div>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search by Subject"
        value={search}
        onChange={handleSearchChange}
      />
      <div className="courses-list">
        <div className="courses-header">
          <span className="course-name-header">Courses</span>
          <span className="course-code-header">Code</span>
          <span>Action</span>
        </div>
        {courses.filter(course => course.subject.toLowerCase().includes(search.toLowerCase())).map(course => (
          <div key={course.id} className="course-item">
            <span className="course-name">{course.name}</span>
            <span className="course-code">{course.code}</span>
            <button onClick={() => handleViewCourse(course.id)}>
              Show
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadPaper;
