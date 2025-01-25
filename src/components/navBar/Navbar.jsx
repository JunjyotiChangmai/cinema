import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Cinema</h1>
    <div className="nav-links">
      <Link to="/"><i  className="fa-solid fa-house"></i></Link>
      <Link to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
      <Link to="/favorites"><i className="fa-solid fa-heart"></i></Link>
    </div>
  </nav>
);

export default Navbar;
