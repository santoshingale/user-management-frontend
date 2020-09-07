import axios from "axios";
import { url } from "../config/env-config";
import { authHeader, authHeaderMultiPart } from "./authService";

const promiseWithErrorHandling = (promise) => {
    return promise.catch((err) => {
        if (err.response && err.response.status === 500) {
            // window.location.assign("/error");
        } else {
            throw err;
        }
    });
};

export default {
    post: async (path, payload) => {
        return promiseWithErrorHandling(
            axios.post(`${url}/${path}`, payload, authHeader())
        );
    },

    get: async (path) => {
        return promiseWithErrorHandling(
            axios.get(`${url}/${path}`, authHeader())
        );
    },
    postMultipart: async (path, payload) => {
        return promiseWithErrorHandling(
            axios.post(`${url}/${path}`, payload, authHeaderMultiPart())
        );
    }
};
