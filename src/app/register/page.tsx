import Link from "next/link"
import AuthForm from "../components/ui/authForm/authForm"
import { Toaster } from 'react-hot-toast';
import { checkAuthSSR } from "@/api/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";



const RegisterPage = async () => {

    const headersList = await headers();
    const cookieHeader = headersList.get('cookie') ?? '';
    const csrfToken = headersList.get('X-CSRF-Token') ?? '';
    const authResult = { user: null, error: null };
    try {
        authResult.user = await checkAuthSSR(cookieHeader, csrfToken);
    } catch (error) {
        console.error('Auth check failed:', error);
    }
    
    if (authResult.user) {
        redirect('/dashboard');
    }

    return(
    <main className="bg-[url('/backgrounds/auth-bgc.png')] bg-center bg-cover h-[calc(100vh-72px)] flex w-full justify-center items-center flex-col">
      <AuthForm type="register" />
      <Link href="/">
        <p className="text-white cursor-pointer">Have Account? Sign In</p>
      </Link>
    <Toaster position='top-right' reverseOrder={false}/>
    </main>
    )
}

export default RegisterPage;