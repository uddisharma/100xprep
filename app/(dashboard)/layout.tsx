import React from 'react'
import DashboardLayout from '@/layouts/UserDashboard';
import { UserProfile } from '@/types/user';
import { getUserDetails } from '@/lib/getDetails/user';

const Layout = async ({ children }: { children: React.ReactNode }) => {

    const user = await getUserDetails();

    if (!user) return

    user.isWorking = user.isWorking ?? false;

    return (
        <DashboardLayout user={user as UserProfile}>
            {children}
        </DashboardLayout>
    )
}
export default Layout

