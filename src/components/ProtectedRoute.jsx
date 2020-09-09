// noinspection ES6CheckImport
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar';
import '../styles/navbar.scss'

const ProtectedRoute = ({ component: Component, componentName, isAuthenticated, ...rest }) => {

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

        <div className="dashboard">
            <div class="wrapper d-flex align-items-stretch">
                <Header showSidebar={showSidebar} sidebar={sidebar} />

                <Navbar sidebar={sidebar} isNavbarFull={isNavbarFull} halfNavNab={halfNavNab} />

                <div className="container-fluid">
                    <div className=" first-div">
                        <div className="col-md-12">
                            <h5>{componentName}</h5>
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
