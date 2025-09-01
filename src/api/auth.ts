import { LoginAPIParams, RegisterAPIParams } from "@/types";
import axiosInstance from "@/utils/restApiConfig";

export const registerUser = async (data: RegisterAPIParams) => {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data;
}

export const loginUser = async (data: LoginAPIParams) => {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
}
