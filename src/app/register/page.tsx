import Link from "next/link"
import AuthForm from "../components/ui/authForm/authForm"
import { Toaster } from 'react-hot-toast';



const RegisterPage = () => {
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