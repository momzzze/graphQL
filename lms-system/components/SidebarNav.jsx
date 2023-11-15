'use client'
import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export const SidebarNav = () => {
    const menuList = [
        {
            id: 1,
            name: 'Browse',
            icon: Search,
            path: '/browse'
        },
        {
            id: 2,
            name: 'Dashboard',
            icon: Layout,
            path: '/dashboard'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        },
        {
            id: 4,
            name: 'Newsletter',
            icon: Mail,
            path: '/newsletter'
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='h-full b-white border-r flex flex-col overflow-y-auto shadow-md'>
            <div className='p-5 border-b z-50'>
                <Image
                    src='/logo.svg'
                    height={170}
                    width={170}
                />
            </div>
            <div className='flex flex-col '>
                {menuList.map((item, index) => (
                    <div className={`flex flex-row gap-2 items-center p-4 px-7 text-gray-500 dark:text-white
                    hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer cursor-pointer 
                    ${activeIndex === index ? 'text-purple-800 bg-purple-100 dark:bg-gray-500' : null}`} onClick={() => setActiveIndex(index)}>
                        <item.icon />
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
