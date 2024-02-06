import axios from 'axios';

export const axiosInstance = axios.create({
    // baseURL:"http://172.20.10.4:5000",
    baseURL:"http://192.168.29.225:5000",
    // baseURL:"http://localhost:5000",
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    },
})