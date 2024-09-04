import React from 'react'
import DashboardLayout from '@/layouts/UserDashboard';

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}
export default Layout

