import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex flex-row gap-3 text-[14px] items-center border p-2 rounded-md bg-gray-50 text-gray-500 dark:bg-gray-700 text-white'>
            <Search height={17}/>
            <input type='text' placeholder='Search course' className='ml-2 bg-transparent border-none outline-none' />
        </div>
    )
}

export default SearchBar