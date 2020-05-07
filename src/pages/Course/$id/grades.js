/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-07 10:48:20
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 15:49:50
 */

import React from 'react'
import { courses } from '@/utils/CourseData'

export default function Grades (props) {
  const {children, match: {params}} = props
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
