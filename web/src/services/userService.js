import axios from "axios";

export const signupService = (data) => {
  console.log(data)
  return axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/register`, data);
};

export const loginService = (data) => {
  console.log(data)
  return axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/login`,data);
};