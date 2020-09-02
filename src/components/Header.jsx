import React from 'react'
import { Navbar,NavLink } from 'react-bootstrap';
import adminImg from '../assets/adminImage.jpg'

const Header = () => {
    return (
        <>
        <Navbar className="justify-content-between" fixed="top" style={{background: 'linear-gradient(to right, #1f6ad0 0%, #13b9de 100%', height:'55px',overflow:'hidden'}}>
            <Navbar.Brand style={{color:'white',fontSize:'1rem'}}>User Management</Navbar.Brand>
            <NavLink style={{background:'#53b9e1', color:'white',height:'40px'}}> <img src={adminImg} style={{height:'30px',width:'30px'}}/> Home </NavLink>
        </Navbar>
        </>
    )
}

export default Header
