import axios from "axios";
import { url } from "../config/env-config";

const tokenKey = 'skyfox_token';

export const authHeader = () => {
    return {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(tokenKey)
        }
    };
}

export const login = async (username, password, rememberMe) => {

    const response = await axios.post(`${url}/login`, {
        email: username,
        password: password
    }).then((res) => {
        rememberMe ?
            localStorage.setItem(tokenKey, res.data.object.token) :
            sessionStorage.setItem(tokenKey, res.data.object.token)
        return res.data;
    }).catch((error) => {
        if( error.response ){
        return error.response.data}
    });
    
    return response;
}

export const forgetpassword = async (email) => {

    const response = await axios.get(`${url}/forgetpassword?email=${email}`);
    const userDetails = response.data;
    return userDetails;
}

export const isLoggedIn = () => {
    return localStorage.getItem(tokenKey) !== null || sessionStorage.getItem(tokenKey) !== null;
}

export const logout = () => {
    localStorage.removeItem(tokenKey);
    sessionStorage.removeItem(tokenKey);
};

