import axios from "axios";
import CheckToken from "./CheckToken";
import { LogoutWithoutNotification } from "./Logout";

let api = axios.create({
  baseURL:"http://localhost:8000/api"
});


api.interceptors.request.use((config) => {
  const token = CheckToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && [401, 403].includes(err.response.status)) {
      LogoutWithoutNotification();
    }
    return Promise.reject(err);
  },
);

export default api;
