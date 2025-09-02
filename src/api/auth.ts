import { LoginAPIParams, RegisterAPIParams } from "@/types";
import axiosInstance from "@/utils/restApiConfig";
import axios from "axios";

export const registerUser = async (data: RegisterAPIParams) => {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data;
}

export const loginUser = async (data: LoginAPIParams) => {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
}

export const checkAuthCSR = async () => {
  const response = await axiosInstance.get('/auth/me');
  return response.data;
}

export const checkAuthSSR = async (cookie: string, csrfToken: string) => {  
  const response = await axiosInstance.get(`/auth/me`, {
    headers: {
      Cookie: cookie,
      'X-CSRF-Token':  csrfToken || ''
    },  
  });
  return response.data;
}
