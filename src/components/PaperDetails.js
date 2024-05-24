import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PaperDetails.css';

const PaperDetails = () => {
  const [paper, setPaper] = useState(null);
  const { courseCode } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const submitComment = () => {
    console.log('Submitting comment:', comment);
    // Here you would typically handle the API call to submit the comment
    setShowModal(false);  // Close modal after submitting
  };


  useEffect(() => {
    const fetchPaperDetails = async () => {
      const response = await fetch(`https://api.example.com/papers/${courseCode}`);
      const data = await response.json();
      setPaper(data);
    };

    fetchPaperDetails().catch(console.error);
  }, [courseCode]);

  if (!paper) return <p>Loading...</p>;

  return (
    <div className="paper-details">
      <h2>Paper Information: {paper.courseTitle}</h2>
      <div className="paper-info">
        <div>Teachers: {paper.teachers.join(', ')}</div>
        <div>Course Title: {paper.courseTitle}</div>
        <div>Course Code: {paper.courseCode}</div>
        <div>Date of Exam: {paper.dateOfExam}</div>
        <div>Duration: {paper.duration} minutes</div>
        <div>Degree: {paper.degree}</div>
        <div>Session: {paper.session}</div>
        <div>Term: {paper.term}</div>
        <div>Year: {paper.year}</div>
        <div>Total Marks: {paper.totalMarks}</div>
        <div>Number Of Questions: {paper.numberOfQuestions}</div>
      </div>
      <div className="actions">
        <button onClick={() => setShowModal(true)}>Comment</button>
        <button onClick={() => console.log('View Paper')}>View Paper</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h3>Comments</h3>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add Comments"
            />
            <button onClick={submitComment}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaperDetails;
