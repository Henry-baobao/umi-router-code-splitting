/*
 * @Description:
 * @Version:
 * @Author: Henry
 * @Date: 2020-05-07 15:01:00
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-09 16:23:02
 */
import React from 'react';
import { courses } from '@/utils/CourseData';
import Link from 'umi/link';
import styles from './index.less';
import { Route } from 'umi';
import { AsyncPage } from '@/utils/AsyncPage';

export default function Assignments(props) {
  const {
    match,
    match: { params },
  } = props;
  const { assignments } = courses[params.id];

  return (
    <div className={styles.border}>
      <div className={styles.sidebar}>
        <h3>Sidebar Assignments</h3>
        <ul>
          {assignments &&
            assignments.map(announcement => (
              <li key={announcement.id}>
                <Link to={`/course/${params.id}/assignments/${announcement.id}`}>
                  {announcement.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.line} />
      <div className={styles.content}>
        <h3>Assignments</h3>
        <Route
          exact
          path={`${match.url}`}
          render={() => <p>Please choose an assignment from sidebar!</p>}
        />
        <Route
          path={`/course/:id/assignments/:assignmentId`}
          render={routeParams => (
            <AsyncPage {...routeParams} page="Course/Assignments/Assignment" />
          )}
        />
      </div>
    </div>
  );
}
