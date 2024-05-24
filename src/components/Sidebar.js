import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Corrected import path

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <div className={`sidebar bg-dark text-white ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`}>
      <div className="sidebar-header d-flex flex-column align-items-center p-3">
        <img
          src={logo} /* Use the imported logo variable */
          alt="Logo"
          style={{ height: '80px', width: 'auto' }} /* Inline CSS for the logo */
        />
        <button className="btn btn-link text-white d-md-none" onClick={toggleSidebar}>&times;</button>
      </div>
      <ul className="list-unstyled p-2 w-100">
        <li className="mb-2"><Link className="btn btn-primary w-100 text-left" to="/" style={{backgroundColor:"grey",border:"grey"}}>Upload Paper</Link></li>
        <li className="mb-2"><Link className="btn btn-primary w-100 text-left" to="/ApprovedPaper" style={{backgroundColor:"grey",border:"grey"}}>ApprovedPaper</Link></li>
        
        <li><Link className="btn btn-primary w-100 text-left" to="/logout" style={{backgroundColor:"grey",border:"grey"}}>Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
