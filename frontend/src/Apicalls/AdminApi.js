import { axiosInstance } from "./axiosInstance";

export const RegisterAdmin = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/admin/Admin-register", payload);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const LoginAdmin = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/admin/Admin-login", payload);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const GetLoggedInUserDetails = async () => {
    try {
        const response = await axiosInstance.get("/api/admin/get-Logged-in-user");
        return response.data;
    } catch (error) {
        throw error;
    }

}