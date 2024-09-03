import React from 'react'
import DashboardLayout from '@/layouts/UserDashboard';

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </div>
    )
}
export default Layout

