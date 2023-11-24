import { Book } from 'lucide-react'
import React from 'react'

function CourseDetails({ curseDetails }) {
    return (
        <div className='mt-5 p-5 rounded-lg border'>
            <h2 className='text-[20px] front-medium'>{curseDetails?.name}</h2>
            <div className='flex flex-row items-center gap-2 mt-2'>
                <Book className='w-6 h-6 rounded-full text-purple-600 bg-purple-100 dark:text-purple-100 dark:bg-purple-700 p-1' />
                <h2 className='text-[12px]'>{curseDetails?.totalChapters} Chapters</h2>
            </div>
            <p className='line-clamp-3 mt-3 text-gray-400'>{curseDetails.description}</p>
        </div>
    )
}

export default CourseDetails