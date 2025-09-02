import AuthContainer from "../components/containers/authContainer/authContainer";

export const metadata = {
  title: "Sign up | To-Do App",
  description: "Sign up to create an account",
};

const RegisterPage = async () => {

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
    <AuthContainer initialUser={user} type="register" />
  );
}

export default RegisterPage;