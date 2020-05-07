/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-07 10:53:54
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 15:42:25
 */
import React from 'react'
import { courses } from '@/utils/CourseData'

export default function Assignment (props) {
  const { match: {params:{id, assignmentId}}} = props
  const {title, body} = courses[id].assignments[assignmentId]
  return (
    <div>
      <h4>{title}</h4>
      <p>
        {body}
      </p>
    </div>
  )
}
