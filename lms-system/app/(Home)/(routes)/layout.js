import Header from '@/components/Header'
import { SidebarNav } from '@/components/SidebarNav'
import React from 'react'



function HomeLayout({ children }) {
    return (
        <div>
            <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50'>
                <SidebarNav />
            </div>
            <Header />
            <div className='ml-64 p-5'>
                {children}
            </div>
        </div>
    )
}

export default HomeLayout