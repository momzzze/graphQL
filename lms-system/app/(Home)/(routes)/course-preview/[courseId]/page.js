'use client'
import CourseDetails from '@/components/CourseDetails';
import EnrollmentSection from '@/components/EnrollmentSection';
import OptionSection from '@/components/OptionSection';
import VideoPlayer from '@/components/VideoPlayer';
import { getCourse } from '@/services';
import React, { useEffect, useState } from 'react'

function CoursePreview({ params }) {
  const [courseDetails, setCourseDetails] = useState([])

  useEffect(() => {
    params.courseId ? getCourseById(params.courseId) : null
  }, [])

  const getCourseById = () => {
    getCourse(params.courseId).then(res => {
      console.log(res.courseList);
      setCourseDetails(res.courseList)
    })
  }

  return courseDetails?.name && (
    <div className='p-2'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          <VideoPlayer videoUrl={courseDetails?.chapter[0]?.video?.url}/>
          <CourseDetails curseDetails={courseDetails}/>
        </div>
        <div className='mx-5 mt-5 md:mt-0'>
          <OptionSection/>
          <EnrollmentSection courseDetails={courseDetails}/>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview