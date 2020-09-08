import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../assets/dashboard.svg'
import { ReactComponent as Files } from '../assets/files.svg'
import { ReactComponent as IdBadge } from '../assets/id-badge.svg'
import { ReactComponent as Settings } from '../assets/settings.svg'
import { ReactComponent as PowerOff } from '../assets/power-off.svg'
import { ReactComponent as User } from '../assets/user.svg'
import { ReactComponent as ArrowsHorizontal } from '../assets/arrows-horizontal.svg'
import angleLeft  from '../assets/angle-left.svg'
import Button from 'react-bootstrap/Button';


const Navbar = ({ sidebar, isNavbarFull, halfNavNab }) => {

  return (
    <nav id='sidebar' className={sidebar ? 'hideSidebar' : isNavbarFull ? '' : 'active'}>
      <ul className='nav-menu-items'>
        <li className="nav-text">
          <Link to='/home'>
            <DashboardIcon />
            <span >Dashboard <Button className="button">UPDATED</Button></span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to='/home'>
            <Files />
            <span>Webpages <img src={angleLeft} alt=""/></span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to='/home'>
            <User />
            <span >Users <img src={angleLeft} alt=""/></span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to='/home'>
            <IdBadge />
            <span >Profile</span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to='/home'>
            <Settings />
            <span >Settings <img src={angleLeft} alt=""/></span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to='/home'>
            <PowerOff />
            <span >Logout</span>
          </Link>
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
