import { axiosInstance } from './axiosInstance';
export const ContactUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/Contact", payload);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const GetAllContacts = async () => {
    try {
        const response = await axiosInstance.get("/api/admin/getContact");
        return response.data;
    } catch (error) {
        throw error;
    }

}
