import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import { ReactComponent as Dashboard } from '../assets/dashboard.svg'
import { ReactComponent as Files } from '../assets/files.svg'
import { ReactComponent as IdBadge } from '../assets/id-badge.svg'
import { ReactComponent as Settings } from '../assets/settings.svg'
import { ReactComponent as PowerOff } from '../assets/power-off.svg'
import { ReactComponent as User } from '../assets/user.svg'
import { ReactComponent as ArrowsHorizontal } from '../assets/arrows-horizontal.svg'
import Button from 'react-bootstrap/Button';


const Navbar = ({ sidebar }) => {

  const [isNavbarFull, setIsNavbarFull] = useState(false)

  const halfNavNab = () => setIsNavbarFull(!isNavbarFull);

  return (
    <div>
      <div className="sidebar">
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={isNavbarFull ? { width: "240px" } : { width: "60px" }}>
          <ul className='nav-menu-items'>
            <li className="nav-text">
              <Link to='/home'>
                <Dashboard />
                <span style={isNavbarFull ? {} : { display: "none" }}>Dashboard</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to='/home'>
                <Files />
                <span style={isNavbarFull ? {} : { display: "none" }}>Webpages</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to='/home'>
                <User />
                <span style={isNavbarFull ? {} : { display: "none" }}>Users</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to='/home'>
                <IdBadge />
                <span style={isNavbarFull ? {} : { display: "none" }}>Profile</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to='/home'>
                <Settings />
                <span style={isNavbarFull ? {} : { display: "none" }}>Settings</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to='/home'>
                <PowerOff />
                <span style={isNavbarFull ? {} : { display: "none" }}>Logout</span>
              </Link>
            </li>
            <div className="navShifter">
              <Button variant="primary" size="sm" onClick={halfNavNab} >
                <ArrowsHorizontal />
              </Button>
            </div>
          </ul>
        </nav>

      </div>
      <div className="dashboard-container">
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
        <h1>jdsjdfjd</h1>
      </div>
    </div>
  );
}

export default Navbar;
