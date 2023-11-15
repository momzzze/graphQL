'use client'
import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import { UserButton, useUser } from '@clerk/nextjs'
import {useRouter} from 'next/navigation'
import ThemeSwitcher from './theme-toggle'
function Header() {
    const {user} = useUser();
    const router=useRouter()
    // useEffect(() => {
    //     console.log(user);
    // }, [user])

    return (
        <div className='ml-64 p-6 border-b flex items-center justify-between'>
            <SearchBar />
            {!user ?
                <button onClick={()=>router.push('/sign-in')}>Login</button>
                :
               <div className='flex flex-row gap-4 items-center justify-center'>
                    <UserButton/>
                    <ThemeSwitcher />
               </div>
            }
        </div>
    )
}

export default Header