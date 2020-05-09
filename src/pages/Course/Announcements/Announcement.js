/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-07 10:50:18
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 15:35:28
 */

import React from 'react'
import { courses } from '@/utils/CourseData'

export default function Announcement (props) {
  const { match: {params:{id, announcementId}}} = props
  const {title, body} = courses[id].announcements[announcementId]
  return (
    <div>
      <h4>{title}</h4>
      <p>
        {body}
      </p>
    </div>
  )
}
