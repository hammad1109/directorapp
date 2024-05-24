import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css'; // Custom CSS for any additional styling
import UploadPaper from './components/pages folder/UploadPaper';
import ApprovedPaper from './components/pages folder/ApprovedPaper';
import PaperDetails from './components/PaperDetails';
import PaperSetting from './components/pages folder/PaperSetting';




function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className={`App d-flex flex-column h-100 ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="d-flex flex-grow-1">
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-grow-1 p-3 content-container">
            <Routes>
              
               {/* <Route path="/" element={<UploadPaper />} />  */}
              {/* <Route path="/" element={<PaperDetails />} /> */}
              <Route path="/" element={<PaperSetting/>} />
              <Route path="/approved-paper" element={<ApprovedPaper />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Main;
