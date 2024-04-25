import axios from "axios";

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

export const LoginRequisition = (data: LoginData, setError: React.Dispatch<string>) => {
    api
      .post(`users/login`, data)
      .then(async (res) => {
        localStorage.setItem("authToken", res.data.token);
        window.location.reload();
      })
      .catch(() => setError("login ou senha incorretos"));
};