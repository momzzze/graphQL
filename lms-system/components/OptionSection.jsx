import Image from 'next/image'
import React from 'react'

function OptionSection() {
    const optionsList=[
        {
            id:1,
            name:'Github',
            icon:'/github.svg'
        },
        {
            id:2,
            name:'Demo',
            icon:'/demo.svg'
        },
        {
            id:3,
            name:'Youtube',
            icon:'/youtube.svg'
        },
    ]
    return (
        <div className='flex items-center gap-4'>
            {optionsList.map((item,index)=>(
                <div key={index} className='flex flex-col p-2 border rounded-lg items-center w-full cursor-pointer'>
                     <Image src={item.icon} alt={item.name} width={30} height={30} className={`${item.name==='Github'?'bg-white':''}`}/>  
                     <h2 className='text-[14px] text-gray-500 dark:text-white'>{item.name}</h2> 
                </div>
            ))}
        </div>
    )
}

export default OptionSection