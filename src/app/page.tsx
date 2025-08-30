import Link from "next/link";
import AuthForm from "./components/ui/authForm/authForm";
import { Toaster } from 'react-hot-toast';


export default function Home() {
  return (
    <main className="bg-[url('/backgrounds/auth-bgc.png')] bg-center bg-cover h-[calc(100vh-72px)] flex w-full justify-center items-center flex-col">
      <AuthForm type="login" />
      <Link href="/register">
        <p className="text-white cursor-pointer">Don't have an account? Sign Up</p>
      </Link>
      <Toaster position='top-right' reverseOrder={false}/>
    </main>
  );
}
