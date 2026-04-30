import axios from "axios";
import CheckAdminToken from "./CheckToken";
import { LogoutWithoutNotification } from "./Logout";

const api = axios.create({
    baseURL: "http://localhost:8000/api"
});

api.interceptors.request.use(
    (config) => {
        const token = CheckAdminToken();
        if(token){
            config.headers.Authorization = `bearer ${token}`
        }
        return config;
    }
);

api.interceptors.response.use(
    res => res,
    err => {
        if(err.response?.status == 401 || err.response?.status === 403){
            LogoutWithoutNotification();
        }
        return Promise.reject(err);
    }
)

export default api;