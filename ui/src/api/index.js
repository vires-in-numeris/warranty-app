import axios from "axios";

const API = axios.create({
  baseURL: "https://pulkit-memories-app.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = async (username) => {
  const res = await API.post("/auth/signin", { username });
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("profile", JSON.stringify(res.data.profile));
  return res.data;
};

export const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
};
