import axios from "axios";
// import { Navigate } from "react-router-dom";

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
});

const token = localStorage.getItem("authToken");
const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

interface LoginData {
    email: string;
    password: string;
}

export const LoginRequisition = async (data: LoginData, navigate: any, setError: React.Dispatch<string>) => {
    await api
      .post(`users/login`, data)
      .then((res) => {
        localStorage.setItem("authToken", res.data.token);
        navigate('/home');
        window.location.reload();
      })
      .catch(() => setError("login ou senha incorretos"));
};