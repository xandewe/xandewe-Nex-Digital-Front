import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export const api = axios.create({
    baseURL: "http://localhost:8000/api/",
});

const token = localStorage.getItem("authToken");
export const headers = {
  headers: {
    Authorization: token,
  },
};

interface LoginData {
    email: string;
    password: string;
}

export const LoginRequisition = async (data: LoginData, navigate: NavigateFunction, setError: React.Dispatch<string>) => {
    await api
      .post(`users/login`, data)
      .then((res) => {
        localStorage.setItem("authToken", res.data.token);
        navigate('/home');
      })
      .catch(() => setError("email or password invalid"));
};