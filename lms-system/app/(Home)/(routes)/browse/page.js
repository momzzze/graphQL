'use client'
import CategoryFilter from '@/components/CategoryFilter'
import CourseList from '@/components/CourseList';
import { getCourseList } from '@/services'
import React, { useEffect, useState } from 'react'

function Browse() {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    getCourses()
  },[]);

  const getCourses=()=>{
    getCourseList().then(res=>{
      setCourses(res.courseLists)
    })
  }
  return (
    <div>
      <CategoryFilter />
      {courses? <CourseList courses={courses}/> : null}
    </div>
  )
}

export default Browse