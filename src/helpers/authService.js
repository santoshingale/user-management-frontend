import axios from "axios";
import { url } from "../config/env-config";
import apiService from './apiService';

const tokenKey = 'user_token';

export const authHeader = () => {

    if (localStorage.getItem('user_token') !== null) {
        return {
            headers: {
                token: 'Bearer ' + localStorage.getItem(tokenKey),
            }
        }
    } else {
        return {
            headers: {
                token: 'Bearer ' + sessionStorage.getItem(tokenKey),
            }
        }
    }
}


export const authHeaderMultiPart = () => {

    if (localStorage.getItem('user_token') !== null) {
        return {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                token: 'Bearer ' + localStorage.getItem(tokenKey),
            }
        }
    } else {
        return {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                token: 'Bearer ' + sessionStorage.getItem(tokenKey),
            }
        }
    }
}


export const login = async (username, password, rememberMe) => {

    const response = await apiService.post('login',{
        email: username,
        password: password
    }).then((res) => {
        rememberMe ?
            localStorage.setItem(tokenKey, res.data.object.token) :
            sessionStorage.setItem(tokenKey, res.data.object.token)
        return res.data;
    }).catch((error) => {
        if (error.response) {
            return error.response.data
        }
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

