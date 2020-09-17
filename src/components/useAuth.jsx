import { useEffect, useState } from "react";
import { isLoggedIn, login, logout, forgetpassword } from "../helpers/authService";
import { useDispatch } from 'react-redux'
import { addUser } from './redux'
import apiService from "../helpers/apiService";

export default () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchUserInfo() {

        if (isLoggedIn()) {
            const userDetails = await apiService.get("home/user/info")
            dispatch(addUser(userDetails.data.object))
        }
        setIsAuthenticated(isLoggedIn());
    }
    fetchUserInfo();
    }, []);

    const handleLogin = async (loginDetails) => {
        const { username, password, rememberMe } = loginDetails;
        const userDetails = await login(username, password, rememberMe);
        console.log(userDetails)
        if (userDetails?.status === 200) {
            dispatch(addUser(userDetails.object))
            setIsAuthenticated(true);
        }
        return userDetails;
    };

    const handleReset = async (email) => {
        await forgetpassword(email)
    }

    const handleLogout = (id) => {
        logout(id);
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated: isAuthenticated,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        handleReset: handleReset,
    };
};
