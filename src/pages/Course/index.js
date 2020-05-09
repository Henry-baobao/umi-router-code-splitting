/*
 * @Description:
 * @Version:
 * @Author: Henry
 * @Date: 2020-05-07 10:17:51
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-09 15:55:29
 */

import React from 'react';
import { courses } from '@/utils/CourseData';
import NavLink from 'umi/navlink';
import styles from './index.less';
import { Route } from 'umi';
import { AsyncPage, DelayedAsyncPage } from '@/utils/AsyncPage';

export default function Course(props) {
  console.log('course props: ', props);
  const {
    match,
    match: { params },
  } = props;
  const course = courses[params.id];

  // 导航栏
  const pages = [
    ['announcements', 'Announcements'],
    ['assignments', 'Assignments'],
    ['grades', 'Grades'],
  ];

  return (
    <div>
      <h2>{course.name}</h2>
      <nav className={styles.nav}>
        {pages.map((page, index) => (
          <NavLink
            key={page[0]}
            to={`/course/${params.id}/${page[0]}`}
            className={styles.link}
            activeStyle={styles.activeLink}
          >
            {page[1]}
          </NavLink>
        ))}
      </nav>

      {/* 嵌套路由 */}
      {/* Route接收component、render和children属性
      其中component传入方法（function或class），然后调用react.createElement，组件自动包含route props
      render接收函数，可将route props传入到加载的组件中 */}
      <Route exact path={`${match.url}`} render={() => <h2>Course Dashboard</h2>} />
      <Route
        path={`/course/:id/announcements`}
        render={routeParams => <AsyncPage {...routeParams} page="Course/Announcements/index" />}
      />
      <Route
        path={`/course/:id/assignments`}
        render={routeParams => (
          <DelayedAsyncPage {...routeParams} page="Course/Assignments/index" />
        )}
      />
      <Route
        path={`/course/:id/grades`}
        render={routeParams => <AsyncPage {...routeParams} page="Course/grades" />}
      />
    </div>
  );
}
