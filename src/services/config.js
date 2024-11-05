import axios from "axios";


const baseUrl = import.meta.env.VITE_BASE_URL;


export const apiClient = axios.create({
    baseURL:baseUrl,
    "Content-Type": "application/json",
})

console.log('base', baseUrl)


apiClient.interceptors.request.use(
    (config) => {

const token = localStorage.getItem("token")

if (token) {
    config.headers.Authorization = `Bearer ${token}`
} 

return config;
},

(error) => Promise.reject(error)
);