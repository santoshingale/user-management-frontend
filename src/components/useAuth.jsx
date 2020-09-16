import { useEffect, useState } from "react";
import { isLoggedIn, login, logout, forgetpassword } from "../helpers/authService";
import { useDispatch } from 'react-redux'
import { addUser } from './redux'


export default () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = useDispatch()
    const tokenKey = 'user_token';

    useEffect(() => {
        setIsAuthenticated(isLoggedIn());
        if (isLoggedIn()) {
            dispatch(addUser((localStorage.getItem(tokenKey) !== null) ?
                JSON.parse(localStorage.getItem(tokenKey)).userData :
                JSON.parse(sessionStorage.getItem(tokenKey)).userData))
        }
    }, []);

    const handleLogin = async (loginDetails) => {
        const { username, password, rememberMe } = loginDetails;
        const userDetails = await login(username, password, rememberMe);
        console.log(userDetails)
        if (userDetails?.status === 200) {
            setIsAuthenticated(true);
            // dispatch(addUser(userDetails.object.userData))
        }
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
