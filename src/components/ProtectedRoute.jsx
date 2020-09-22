// noinspection ES6CheckImport
import { Redirect, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar';
import '../styles/navbar.scss'
import { ReactComponent as Home } from '../assets/home.svg'


const ProtectedRoute = ({ component: Component, handleLogout, key, componentName, isAuthenticated, ...rest }) => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [isNavbarFull, setIsNavbarFull] = useState(true)

    const halfNavNab = () => setIsNavbarFull(!isNavbarFull);

    const renderedComponent = (props) => {

        const { location } = props;
        return isAuthenticated
            ? (<Component {...props} />)
            : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            from: location
                        }
                    }}
                />
            );
    };

    return (

        <div className="dashboard" >
            <div className="wrapper d-flex align-items-stretch">
                <Header showSidebar={showSidebar} sidebar={sidebar} handleLogout={handleLogout} />

                <Navbar sidebar={sidebar} isNavbarFull={isNavbarFull} halfNavNab={halfNavNab} handleLogout={handleLogout} />

                <div className="container-fluid">
                    <div className=" first-div">
                        <div className="col-md-6 col-lg-6">
                            <h5>{componentName}</h5>
                        </div>
                        <div className=" col-md-6 col-lg-6 first-div-holder">
                            <Link to="/dashboard">
                                <Home />
                                Home
                            </Link>
                            <h3 > {rest.location.pathname} </h3>
                        </div>
                    </div>

                    <Route
                        {...rest}
                        component={renderedComponent}
                    />

                </div>
            </div>
        </div>

    );
}

ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default ProtectedRoute;
