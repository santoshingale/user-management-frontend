import React from 'react'
import { Navbar,NavLink } from 'react-bootstrap';
import adminImg from '../assets/adminImage.jpg'
import {ReactComponent as ArrowCircle} from '../assets/arrow-circle-right.svg'

const Header = ({showSidebar,sidebar}) => {
    
    return (
        <>
        <Navbar className="justify-content-between" fixed="top " 
        style={{background: 'linear-gradient(to right, #1f6ad0 0%, #13b9de 100%', height:'55px',overflow:'hidden'}}>
            <div className="navTitle">
            <Navbar.Brand style={{color:'white',fontSize:'1rem'}}>User Management</Navbar.Brand>
            <ArrowCircle onClick={showSidebar} style={sidebar ? {transform: 'rotateY(180deg)'} :{}}/>
            </div>
            <NavLink style={{background:'#53b9e1', color:'white',height:'40px'}}> <img src={adminImg} alt="header"style={{height:'30px',width:'30px'}}/> Home </NavLink>
        </Navbar>
        </>
    )
}

export default Header
