import {useEffect, useState} from "react";
import {isLoggedIn, login, logout, forgetpassword} from "../helpers/authService";

export default () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        setIsAuthenticated(isLoggedIn());
    }, []);

    const handleLogin = async (loginDetails) => {
        const {username,password} = loginDetails
        const userDetails = await login(username, password);
        setIsAuthenticated(true);
        return userDetails;
    };

    const handleReset = async (email)=>{
        await forgetpassword(email)
    }

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated: isAuthenticated,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        handleReset: handleReset,
    };
};
