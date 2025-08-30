'use client'
import { FC, useState } from "react";
import Image from "next/image";
import { LoginFormProps, RegisterFormProps } from "@/types";
import { useRegisterMutation } from "@/hooks/useRegisterMutation";
import { parseAxiosError } from "@/utils/parseAxiosError";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";


interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {

    const router = useRouter();

    const registerMutation = useRegisterMutation();

    const [seePassword, setSeePassword] = useState<boolean>(false);

    const [errors, setErrors] = useState<{email?: string; password?: string; fullName?: string}>({});

    const [loginData, setLoginData] = useState<LoginFormProps>({
        email: '',
        password: ''
    });

    const [registerData, setRegisterData] = useState<RegisterFormProps>({
        fullName: '',
        email: '',
        password: ''
    });

    const validateField = (name: string, value: string) => {
        if(name === "email"){
            if(!value){
                return "Email is required";
            }else if(!/\S+@\S+\.\S+/.test(value)){
                return "Email is invalid";
            }
        }else if(name === "password"){
            if(!value){
                return "Password is required";
            }else if(value.length < 5){
                return "Password must be at least 5 characters";
            }
        }else if(name === "fullName"){
            if(!value){
                return "Full Name is required";
            }
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        const error = validateField(name, value);

        setErrors(prev => ({...prev, [name]: error}));
    }

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        const newValue = name === 'email' ? value.toLowerCase() : value;

        if(type === 'login'){
            setLoginData(prev => ({...prev, [name]: newValue}));
        }else{
            setRegisterData(prev => ({...prev, [name]: newValue}));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const hasErrors = Object.values(errors).some(value => value != undefined && value !== '');
        if(hasErrors) return;
        if(type === 'login'){
            // Handle login
        }else{
            registerMutation.mutate(registerData, {
                onError: (error: unknown) => {
                  toast.error(parseAxiosError(error));
                },
                onSuccess: () => {
                    router.push('/');
                    toast.success('Registration successful! You can now log in.');
                },
            });
        }
    };

    return (
        <form className={"w-120 h-135 mb-15 p-10 rounded-[72px] shadow-2xl bg-white"} onSubmit={handleSubmit}>
            {type === "login" ? (
                <div className="flex flex-col items-center gap-4">
                    <h1 className="mb-3 text-3xl font-bold">WELCOME BACK!</h1>
                    <button className="cursor-pointer w-max h-min px-4 py-2 font-semibold transition-[0.2s] flex items-center gap-2 border-1 border-[#999] rounded-lg hover:border-[#000]">
                        LOG IN BY
                        <Image src="/icons/google.svg" alt="Google logo" height={25} width={25}/>
                    </button>
                    <div className="flex items-center gap-x-2">
                        <div className="w-35 h-[1px] bg-[#9999]"></div>
                        <p className="text-[#999] text-[15px]">OR</p>
                        <div className="w-35 h-[1px] bg-[#9999]"></div>
                    </div>
                    <div className="flex min-h-50 flex-col gap-2">
                        <label htmlFor="email">Email:</label>
                        <input className="transition-[0.4s] w-78 mb-3 border-1 border-[#999] rounded-lg p-2 hover:border-[#000]" onBlur={handleBlur} onChange={handleChange} value={loginData.email} placeholder="Enter Email" type="email" id="email" name="email" required />
                        {errors.email && <div className=" mt-[-18px] flex items-center h-min">
                            <Image src="/icons/warning.svg" alt="Warning" height={15} width={15} />
                            <p className="text-red-500 ml-1 text-xs">{errors.email}</p>
                            </div>}
                        <label htmlFor="password">Password:</label>
                        <div className="flex items-center justify-between w-78 mb-3 border-1 border-[#999] rounded-lg p-2 hover:border-[#000]">
                            <input className="w-40s" onChange={handleChange} value={loginData.password} placeholder="Enter Password"  onBlur={handleBlur} type={seePassword ? "text" : "password"}   id="password" name="password" required />
                            <p className="cursor-pointer text-xs text-[#AE3698]">Forgot Password?</p>
                        </div>                    
                        {errors.password && <div className=" mt-[-18px] flex items-center h-min">
                            <Image src="/icons/warning.svg" alt="Warning" height={15} width={15} />
                            <p className="text-red-500 ml-1 text-xs">{errors.password}</p>
                            </div>
                        }
                    </div>
                    <button className="transition-[0.4s] w-78 h-12 py-2 mt-5.5 text-xl font-semibold text-white bg-[#AE3698] rounded-lg hover:bg-[#9B2C7A]">LOG IN</button>
                </div>
            ) : (
                 <div className="flex flex-col items-center gap-2">
                    <h1 className="mb-3 text-3xl font-bold">HELLO!</h1>
                    <div className="min-h-76 mt-3 flex flex-col gap-2">
                        <label htmlFor="Full Name">Full Name:</label>
                        <input className="transition-[0.4s] w-78 mb-3 border-1 border-[#999] rounded-lg p-2 hover:border-[#000]"  onBlur={handleBlur} onChange={handleChange} value={registerData.fullName} placeholder="Enter Full Name" type="text" id="fullName" name="fullName" required />
                        {errors.fullName && <div className=" mt-[-18px] flex items-center h-min">
                            <Image src="/icons/warning.svg" alt="Warning" height={15} width={15} />
                            <p className="text-red-500 ml-1 text-xs">{errors.fullName}</p>
                            </div>}
                        <label htmlFor="email">Email:</label>
                        <input className="transition-[0.4s] w-78 mb-3 border-1 border-[#999] rounded-lg p-2 hover:border-[#000]"  onBlur={handleBlur} onChange={handleChange} value={registerData.email} placeholder="Enter Email" type="email" id="email" name="email" required />
                        {errors.email && <div className=" mt-[-18px] flex items-center h-min">
                            <Image src="/icons/warning.svg" alt="Warning" height={15} width={15} />
                            <p className="text-red-500 ml-1 text-xs">{errors.email}</p>
                            </div>}
                        <label htmlFor="password">Password:</label>
                        <div className="flex items-center justify-between w-78 mb-3 border-1 border-[#999] rounded-lg p-2 hover:border-[#000]">
                            <input className="w-65" onBlur={handleBlur} onChange={handleChange} value={registerData.password} placeholder="Enter Your Password"  type={seePassword ? "text" : "password"}   id="password" name="password" required />
                            <Image className="cursor-pointer" src={seePassword ? "/icons/eye-active.svg" : "/icons/eye-inactive.svg"} alt="Toggle Password Visibility" height={20} width={25} onClick={() => setSeePassword(!seePassword)} />
                        </div>
                        {errors.password && <div className=" mt-[-18px] flex items-center h-min">
                            <Image src="/icons/warning.svg" alt="Warning" height={15} width={15} />
                            <p className="text-red-500 ml-1 text-xs">{errors.password}</p>
                            </div>}
                    </div>
                    <button className="transition-[0.4s] w-78 h-12 py-2 mt-5 text-xl font-semibold text-white bg-[#AE3698] rounded-lg hover:bg-[#9B2C7A]">SIGN UP</button>
                </div>
            )}
        </form>
    )
}

export default AuthForm;