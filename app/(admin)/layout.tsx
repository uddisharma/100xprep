import React from 'react'
import AdminDashboardLayout from '@/layouts/AdminDashboardLayout';
import { getServerSession } from 'next-auth';
import { notFound, redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession();

    if (!session || !session.user) {
        return redirect('/signin');
    }

    if (process.env.LOCAL_CMS_PROVIDER=="true") {
        return <>{children}</>;
    }

    if (!process.env.ADMINS?.split(',').includes(session.user.email!)) {
        return notFound();
    }

    return (
        <AdminDashboardLayout>
            {children}
        </AdminDashboardLayout>
    )
}
export default Layout

