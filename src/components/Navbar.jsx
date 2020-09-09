import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../assets/dashboard.svg'
import { ReactComponent as Files } from '../assets/files.svg'
import { ReactComponent as IdBadge } from '../assets/id-badge.svg'
import { ReactComponent as Settings } from '../assets/settings.svg'
import { ReactComponent as PowerOff } from '../assets/power-off.svg'
import { ReactComponent as User } from '../assets/user.svg'
import { ReactComponent as ArrowsHorizontal } from '../assets/arrows-horizontal.svg'
import angleLeft from '../assets/angle-left.svg'
import Button from 'react-bootstrap/Button';


const Navbar = ({ sidebar, isNavbarFull, halfNavNab }) => {

  const [userTab, setUserTab] = useState(false)

  return (
    <nav id='sidebar' className={sidebar ? 'hideSidebar' : isNavbarFull ? '' : 'active'}>
      <ul className='nav-menu-items'>
        <li className="nav-text">
          <div className="list">
            <DashboardIcon />
            <span >Dashboard <Button className="button">UPDATED</Button></span>
          </div>
        </li>

        <li className="nav-text">
          <div className="list">
            <Files />
            <span>Webpages <img src={angleLeft} alt="" /></span>
          </div>
        </li>

        <li className="nav-text" onClick={() => setUserTab(!userTab)}>
          <div className="list">
            <User />
            <span >Users <img src={angleLeft} alt="" /></span>
          </div>
        </li>
        <li className="" style={userTab ? {} : { display: 'none' }}>
        <Link to="/adduser">
          <div className="list">
            <span >New User </span>
          </div>
          </Link>
        </li>

        <li className="" style={userTab ? {} : { display: 'none' }}>
          <Link to="/userlist">
          <div className="list">
            <span >Users List <Button className="button">UPDATED</Button></span>
          </div>
          </Link>
        </li>
        <li className="nav-text">
          <div className="list">
            <IdBadge />
            <span >Profile</span>
          </div>
        </li>

        <li className="nav-text">
          <div className="list">
            <Settings />
            <span >Settings <img src={angleLeft} alt="" /></span>
          </div>
        </li>

        <li className="nav-text">
          <div className="list">
            <PowerOff />
            <span >Logout</span>
          </div>
        </li>
        <div className="navShifter">
          <Button variant="primary" size="sm" onClick={halfNavNab} >
            <ArrowsHorizontal />
          </Button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
