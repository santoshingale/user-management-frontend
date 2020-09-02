import { useEffect, useState } from "react";
import { isLoggedIn, login, logout, forgetpassword } from "../helpers/authService";

export default () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        setIsAuthenticated(isLoggedIn());
    }, []);

    const handleLogin = async (loginDetails) => {
        const { username, password, rememberMe } = loginDetails;
        const userDetails = await login(username, password, rememberMe);
        console.log(userDetails)
        if (userDetails.status === 200)
            {setIsAuthenticated(true);}
        return userDetails;
    };

    const handleReset = async (email) => {
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
