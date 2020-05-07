/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-07 10:17:51
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 15:47:01
 */

import React from 'react'
import { courses } from '@/utils/CourseData'
import NavLink from 'umi/navlink'
import styles from './_layout.less'

export default function Course (props) {
  const {children, match: {params}} = props
  const course = courses[params.id]

  let content = null
  if (children) {
    content = children
  }
  // 导航栏
  const pages = [
    [ 'announcements', 'Announcements' ],
    [ 'assignments', 'Assignments' ],
    [ 'grades', 'Grades' ]
  ]

  return (
    <div>
      <h2>{course.name}</h2>
      <nav className={styles.nav}>
        {pages.map((page, index) => (
           <NavLink
             key={page[0]}
             to={`/course/${params.id}/${page[0]}`}
             className={styles.link}
             activeStyle={styles.activeLink}>
             {page[1]}
           </NavLink>
         ))}
      </nav>
      {content}
    </div>
  )
}
