import React from 'react'
import DashboardLayout from '@/layouts/UserDashboard';
import { headers } from 'next/headers';
import { getUserDetails } from '@/lib/getDetails';
import { UserProfile } from '@/types/user';

const Layout = async ({ children }: { children: React.ReactNode }) => {

    const req: any = {
        headers: headers(),
    };

    const user = await getUserDetails(req);

    if (!user) return

    user.isWorking = user.isWorking ?? false;

    return (
        <DashboardLayout user={user as UserProfile}>
            {children}
        </DashboardLayout>
    )
}
export default Layout

