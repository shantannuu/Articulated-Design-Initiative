import { axiosInstance } from './axiosInstance';
export const createProject = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/project/post-project", payload);
        return response.data;
    } catch (error) {
        throw error;
    }
    
}

export const createDetailProject = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/project/post-detail-project", payload);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const getProjectById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/project/get-project-by-id/${id}`);

        return response.data;

    } catch (error) {
        throw error;
    }

}



export const GetAllProjects = async () => {
    try {
        const response = await axiosInstance.get("/api/project/get-all-projects");
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const createCategory = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/project/post-category", payload);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const GetAllCategories = async () => {
    try {
        const response = await axiosInstance.get("/api/project/get-all-categories");
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const getProjectsByCategory = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/project/search-category/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const getCategoryById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/project/get-category-by-id/${id}`);
        
        return response.data;

    } catch (error) {
        throw error;
    }

}
