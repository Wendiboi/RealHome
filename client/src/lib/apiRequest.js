import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://real-home-alpha.vercel.app/api",
    withCredentials: true
})

export default apiRequest;
