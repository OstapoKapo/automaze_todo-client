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

export interface AuthFormProps {
  type: "login" | "register";
}