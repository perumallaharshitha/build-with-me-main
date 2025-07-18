import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import img from '../../assets/myname.svg';
function Header() {
  return (
    <header className="header shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="nav-left">
          <NavLink to="/projects" className="nav-item">Projects</NavLink>
          <span>|</span>
          <NavLink to="/co-curricular" className="nav-item">Co-Curricular</NavLink>
          <span>|</span>
          <NavLink to="/certifications" className="nav-item">Certifications</NavLink>
          <span>|</span>
          <NavLink to="/coding-profiles" className="nav-item">Coding Profiles</NavLink>
        </div>
        <div className="nav-logo">
          <NavLink to="/">
            <img
              src={img}
              alt="Harshitha Logo"
              className="logo-image"
            />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
