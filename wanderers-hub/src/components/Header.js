import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header container-fluid">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-3 logo">
          Wanderer's Hub
        </div>
        <nav className="col-md-6 nav-links">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">About</a>
          <a href="#" className="nav-item">Explore</a>
          <a href="#" className="nav-item">Contact</a>
        </nav>
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <input type="text" className="form-control search-bar" placeholder="Search" />
          <div className="profile-icon"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
