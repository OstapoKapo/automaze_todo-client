import AuthContainer from "./components/containers/authContainer/authContainer";

export const metadata = {
  title: "Login | To-Do App",
  description: "Sign in to access your dashboard",
};

const HomePage = async () => {

  // i want create ssr rendering for quick session check but in vercel i cant use http only cookies in ssr 

  // const headersList = await headers();
  // const cookieHeader = headersList.get('cookie') ?? '';
  // const csrfToken = headersList.get('X-CSRF-Token') ?? '';
  const user = null;
  // try {
  //   user = await checkAuthSSR(cookieHeader, csrfToken);
  // } catch (error) {
  //    console.error('Auth check failed:', error);
  // }

  // if (user) {
  //     redirect('/dashboard');
  // }


  return(
    <AuthContainer initialUser={user} type="login" />
  );
}

export default HomePage;
