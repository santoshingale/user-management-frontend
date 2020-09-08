// noinspection ES6CheckImport
import { BrowserRouter as Router, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import Dashboard from './Dashboard';


const ProtectedRoute = ({ component: Component, isAuthenticated, match, ...rest }) => {


    const renderedComponent = (props) => {
        const { location } = props;
        // console.log(props)
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

        <Switch>
            <Route path={`${rest.path}/register`}
                {...rest}
                exact
                component={renderedComponent}
            />
            {/* <Route
                {...rest}
                component={renderedComponent}

            /> */}
            {console.log(rest.path)}
        </Switch>
    );
}

ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default ProtectedRoute;
