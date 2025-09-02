'use client'
import { User } from "@/types";
import { FC, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AuthForm from "../../ui/authForm/authForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { checkAuthCSR } from "@/api/auth";
import LoadingSpinner from "../../ui/loadingSpinner/loadingSpinner";

interface AuthContainerProps {
    initialUser: null | User,
    type: "login" | "register",
}
const AuthContainer: FC<AuthContainerProps> = ({ initialUser, type }) => {

  const router = useRouter();

  const { data: user, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: checkAuthCSR,
    initialData: initialUser, 
    retry: 1,
  });

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  if (user) return null;

    return(
    <main className="bg-[url('/backgrounds/auth-bgc.png')] bg-center bg-cover h-[calc(100vh-72px)] flex w-full justify-center items-center flex-col">
      <AuthForm type={type} />
      {type === "login" ? (
        <Link href="/register">
          <p className="text-white cursor-pointer">Don't have an account? Sign Up</p>
        </Link>
      ) : (
        <Link href="/">
          <p className="text-white cursor-pointer">Already have an account? Log In</p>
        </Link>
      )}
      <Toaster position='top-right' reverseOrder={false}/>
    </main>
    )
}

export default AuthContainer;