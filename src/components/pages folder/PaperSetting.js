import React, { useEffect, useState } from 'react';
import './PaperSetting.css';

const PaperSetting = ({ courseCode }) => {
  const [paperDetails, setPaperDetails] = useState(null);

  useEffect(() => {
    // Fetch paper details from API
    const fetchPaperDetails = async () => {
      const response = await fetch(`https://api.yourdomain.com/papers/${courseCode}`);
      const data = await response.json();
      setPaperDetails(data);
    };

    fetchPaperDetails().catch(console.error);
  }, [courseCode]);

  if (!paperDetails) return <div>Loading...</div>;

  return (
    <div className="paper-setting">
      <header>
        <div className="university-info">
          <img src="/path-to-university-logo.png" alt="University Logo" />
          <div>
            <h1>Barani Institute of Informational Technology</h1>
            <h2>PMAS Arid Agriculture University, Rawalpindi, Pakistan</h2>
            <h3>Fall 2023: Mid Term Examination</h3>
          </div>
        </div>
      </header>
      <div className="course-info">
        <h4>Course Title: {paperDetails.courseTitle}</h4>
        <p>Time & Duration: 11:00-12:30 PM</p>
        <p>Course Code: {paperDetails.courseCode}</p>
        <p>Teachers' Name/s: {paperDetails.teachers}</p>
        <p>Total Marks: {paperDetails.totalMarks}</p>
      </div>
      <div className="questions">
        {paperDetails.questions.map((question, index) => (
          <div key={index} className="question">
            <h5>Question #{index + 1}:</h5>
            <p>{question.text}</p>
            <div className="actions">
              <button className="accept">Accept</button>
              <button className="reject">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperSetting;
