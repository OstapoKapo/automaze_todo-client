export interface LoginFormProps{
    email: string;
    password: string;
}

export interface RegisterAPIParams{
    fullName: string;
    email: string;
    password: string;
}

export interface RegisterFormProps{
    fullName: string;
    email: string;
    password: string;
}

export interface LoginAPIParams{
    email: string;
    password: string;
    recaptchaToken: string | null;
}

export interface RegisterFormProps{
    fullName: string;
    email: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    fullName: string;
    ip: string;
    ua: string;
    createdat: string;
}

export interface AuthFormProps {
  type: "login" | "register";
}