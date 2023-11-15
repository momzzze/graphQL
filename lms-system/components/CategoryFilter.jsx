'use client'
import React, { useState } from 'react'

function CategoryFilter() {
    const [activeIndex,setActiveIndex]=useState(0)
    const filterOptions=[
        {
            id:1,
            name:'All',
            value:'all'
        },
        {
            id:2,
            name:'React',
            value:'react'
        },
        {
            id:3,
            name:'Next Js',
            value:'nextjs'
        },
        {
            id:4,
            name:'Tailwind Css',
            value:'tailwindcss'
        },
        {
            id:5,
            name:'Firebase',
            value:'firebase'
        },
    ]

    return (
        <div className='flex flex-col md:flex-row gap-5'>
            {filterOptions.map((item,index)=>(
                <button key={index} className={`${activeIndex === index ? 'bg-purple-50 text-purple-800 dark:bg-gray-500 dark:text-white' : null}
                  text-[12px] p-2 px-4 rounded-md cursor-pointer font-bold hover:bg-purple-50 border border-gray-700 hover:border-purple-800 dark:hover:bg-gray-700 dark:hover:border-white dark:text-white`} onClick={() => setActiveIndex(index)}>
                    <h2>{item.name}</h2>
                </button>
            )
            )}
        </div>
    )
}

export default CategoryFilter