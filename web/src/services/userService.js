import axios from "axios";

export const signupService = (data) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/register`,data);
};

export const loginService = (data) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/login`,data);
};