import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function signup(data) {
  delete data.confirmPassword;
  const response = axios.post(`${BASE_URL}/signup`, data);
  return response;
}

export function signin(data) {
  const response = axios.post(`${BASE_URL}/signin`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${BASE_URL}/me`, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });

  return response;
}
