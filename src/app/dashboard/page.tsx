import { checkAuthSSR } from "@/api/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {

    const headersList = await headers();
    const cookieHeader = headersList.get('cookie') ?? '';
    const csrfToken = headersList.get('X-CSRF-Token') ?? '';

    const authResult = { user: null, error: null };

    try {
        authResult.user = await checkAuthSSR(cookieHeader, csrfToken);
    } catch (error) {
        console.error('Auth check failed:', error);
    }

    if (!authResult.user) {
        redirect('/');
    }

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default DashboardPage;