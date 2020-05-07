/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-07 15:01:00
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 15:36:23
 */
import React from 'react'
import { courses } from '@/utils/CourseData'
import Link from 'umi/link'
import styles from './_layout.less'

export default function Announcements (props) {
  const {children, match: {params}} = props
  const {announcements} = courses[params.id]

  let content = null
  if (children) {
    content = children
  }

  return (
    <div className={styles.border}>
      <div className={styles.sidebar}>
        <h3>Sidebar Assignments</h3>
        <ul>
          {announcements && announcements.map(announcement => (
             <li key={announcement.id}>
               <Link to={`/course/${params.id}/announcements/${announcement.id}`}>
               {announcement.title}
               </Link>
             </li>))}
        </ul>
      </div>
      <div className={styles.line} />
      <div className={styles.content}>
        <h3>Announcements</h3>
        {content}
      </div>
    </div>
  )
}
