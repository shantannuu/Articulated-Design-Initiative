import { axiosInstance } from './axiosInstance';
export const createMedia = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/media/post-media", payload);
        return response.data;
    } catch (error) {
        throw error;
    }

}


export const GetAllMedias = async () => {
    try {
        const response = await axiosInstance.get("/api/media/get-all-medias");
        return response.data;
    } catch (error) {
        throw error;
    }

}