/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-07 10:48:20
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-09 15:42:30
 */

import React from 'react'
import { courses } from '@/utils/CourseData'

export default function Grades (props) {
  console.log('grades props: ', props)
  const { match: {params}} = props
  const {assignments} = courses[params.id]
  return (
    <div>
      <h3>Grades</h3>
      <ul>
        {assignments.map(assignment => (
           <li key={assignment.id}>
             {assignment.grade}-
             {assignment.title}
           </li>
         ))}
      </ul>
    </div>
  )
}
