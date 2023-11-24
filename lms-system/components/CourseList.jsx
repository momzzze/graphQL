import CoursePreview from '@/app/(Home)/(routes)/course-preview/[courseId]/page';
import { Book } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const CourseList = ({ courses }) => {

    console.log(courses);

    return (
        <div className='
        mt-5 
        grid grid-cols-1
        sm:grid-cols-2 
        mg:grid-cols-3 
        lg:grid-cols-4
        gap-4
        '>
            {courses.map((course, index) => (
                <div key={index} className='border rounded-lg p-2 cursor-pointer hover:border-purple-600 dark:hover:border-gray-500'                
                >
                    <Link href={`/course-preview/${course.id}`}>                    
                    <Image
                        src={course.banner.url}
                        height={500}
                        width={1000}
                        alt={course.name}
                        className='rounded-lg h-64 w-full'
                    />
                    <div className='mt-2'>
                        <h2 className='text-[18px] md:text-[16px]'>{course.name}</h2>
                        <h2 className='text-[13px] text-gray-500 dark:text-gray-400'>{course.author}</h2>
                        <div className='flex flex-row items-center gap-2 mt-2'>
                            <Book className='w-6 h-6 rounded-full text-purple-600 bg-purple-100 dark:text-purple-100 dark:bg-purple-700 p-1'/>
                            <h2 className='text-[12px]'>{course.totalChapters} Chapters</h2>
                        </div>
                        <h2 className='mt-2 text-[14px]'>{course.free?'Free':'Paid'}</h2>
                    </div>  
                    </Link>                  
                </div>
            ))}
        </div>
    )
}

export default CourseList