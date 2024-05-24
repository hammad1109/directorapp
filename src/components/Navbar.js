import React from 'react';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="btn btn-link text-white d-md-none" onClick={toggleSidebar}>&#9776;</button>
      <a className="navbar-brand" href="#">DIRECTOR DASHBOARD</a>
    </nav>
  );
}

export default Navbar;
