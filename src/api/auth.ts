import { RegisterFormProps } from "@/types";
import axiosInstance from "@/utils/restApiConfig";

export const registerUser = async (data: RegisterFormProps) => {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data;
}
