import axios  from "axios";
const API = "http://localhost:3000/api";

export const register = (values) => axios.post(`${API}/register`, values);
