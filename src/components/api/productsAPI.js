import {axiosInstance} from './axiosInstance';

export const productsAPI = async () => {
    try {
        const response = await axiosInstance.get('Product/productos');
        return response.data;
    } catch (error) {
        throw error;
    }
}

