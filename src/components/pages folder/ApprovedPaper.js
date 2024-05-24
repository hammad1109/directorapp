// src/pages/Orders.js
import React, { useState, useEffect } from 'react';
import { my_loaclhost, port_3005 } from '../../MyAppConfigurations';

const ApprovedPaper = () => {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState([]);

  const fetch_approve_paper_data = async () => {
    const response = await fetch(`https://${my_loaclhost}:${port_3005}/getdata`);
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    setCourses(data);

  };


  useEffect(() => {
    // Fetch courses from an API

    fetch_approve_paper_data()


  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="d-flex flex-column mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          style={{ width: '100%' }}
          placeholder="Search subject..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="list-group">
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <h3>course</h3>
          <h3>Code</h3>
        </li>
        {courses.filter(course => course.subject.includes(search.toLowerCase())).map(course => (
          <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{course.name}</h5>
              <p className="mb-1">{course.code}</p>
            </div>
            <button
              className="btn btn-outline-sucess"
            >
              Approved
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApprovedPaper;
