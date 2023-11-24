import React from 'react'

function EnrollmentSection({courseDetails}) {
    
    return (
        <div>           
           {courseDetails?.free ? (
             <div className='mt-5 border rounded-lg text-center p-5'>
             <h2 className='text-gray-500 dark:text-white'>Learn and Build Project,Access Source Code and Track your Progress!</h2>
             <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>Enroll Now</button>
         </div>
           ):(
           <div className='mt-5 border rounded-lg text-center p-5'>
                <h2 className='text-gray-500 dark:text-white'>Buy this course, Source code and Track your progress</h2>
                <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>Buy course for $1.99</button>
            </div>
            )}
            <div className='mt-5 border rounded-lg text-center p-5'>
                <h2 className='text-gray-500 dark:text-white'>Buy monthly membership and get access to all courses, source code and track your progress</h2>
                <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>Buy Membership $4.99/Monthly</button>
            </div>
        </div>
    )
}

export default EnrollmentSection