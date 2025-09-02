import DashboardContainer from "../components/containers/dashboardContainer/dashboardContainer";

export const metadata = {
  title: "Dashboard | To-Do App",
  description: "Your personal dashboard",
};

const DashboardPage = async () => {
    
    // const headersList = await headers();
    // const cookieHeader = headersList.get('cookie') ?? '';
    // const csrfToken = headersList.get('X-CSRF-Token') ?? '';


    // try {
    //     authResult.user = await checkAuthSSR(cookieHeader, csrfToken);
    //     console.log(authResult.user);
    // } catch (error) {
    //     console.error('Auth check failed:', error);
    // }

    // if (!user) {
    //     redirect('/');
    // }

    return (
        <DashboardContainer />
    )
}

export default DashboardPage;