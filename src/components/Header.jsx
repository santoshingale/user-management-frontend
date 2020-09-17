import React from 'react'
import { Navbar, NavLink } from 'react-bootstrap';
import { ReactComponent as ArrowCircle } from '../assets/arrow-circle-right.svg'
import Popover from '@material-ui/core/Popover';
import { ReactComponent as PowerOff } from '../assets/power-off.svg'
import { useSelector } from 'react-redux'

const Header = ({ showSidebar, sidebar, handleLogout }) => {
    const user = useSelector(users => users.user[0])

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Navbar className="justify-content-between header-bar" fixed="top ">
                <div className="navTitle">
                    <Navbar.Brand className="header-brand" >User Management</Navbar.Brand>
                    <ArrowCircle onClick={showSidebar} style={sidebar ? {} : { transform: 'rotateY(180deg)' }} />
                </div>
                <NavLink onClick={handleClick} className="header-link">
                    <img src={`http://localhost:8080/home/user/image/${user?.profilePic}`} alt="header" />
                    {user?.firstname}
                </NavLink>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <ul className="unorder-list">
                        <li >Profile</li>
                        <li onClick={()=>handleLogout(user?.id)}>
                            <div className="list">
                                <PowerOff />
                                <span >Logout</span>
                            </div>
                        </li>
                    </ul>
                </Popover>
            </Navbar>
        </>
    )
}

export default Header
