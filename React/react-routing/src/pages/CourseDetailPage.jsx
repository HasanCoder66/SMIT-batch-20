import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetailPage = () => {

    const {courseName} = useParams()
    console.log(courseName);
    
  return (
    <div>
      This is course detail page hai... {courseName}
    </div>
  )
}

export default CourseDetailPage
