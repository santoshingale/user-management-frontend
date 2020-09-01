import axios from "axios";
import {url} from "../config/env-config";

const tokenKey = 'skyfox_token';

export const authHeader = () => {
    return {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(tokenKey)
        }
    };
}

export const login = async (username, password) => {

    const response = await axios.post(`${url}/login`, {
        email: username,
        password: password
    });
    const userDetails = response.data;
    localStorage.setItem(tokenKey, userDetails.object.token);
    return userDetails;
}

export const forgetpassword = async (email) => {

    const response = await axios.get(`${url}/forgetpassword?email=${email}`);
    const userDetails = response.data;
    return userDetails;
}

export const isLoggedIn = () => {
    return localStorage.getItem(tokenKey) !== null;
}

export const logout = () => {
    localStorage.removeItem(tokenKey);
};

