/*
 * @Description:
 * @Version:
 * @Author: Henry
 * @Date: 2020-05-07 15:01:00
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-09 16:20:37
 */
import React from 'react';
import { courses } from '@/utils/CourseData';
import Link from 'umi/link';
import styles from './index.less';
import { Route } from 'umi';
import { AsyncPage } from '@/utils/AsyncPage';

export default function Announcements(props) {
  const {
    match,
    match: { params },
  } = props;
  const { announcements } = courses[params.id];
  return (
    <div className={styles.border}>
      <div className={styles.sidebar}>
        <h3>Sidebar Announcements</h3>
        <ul>
          {announcements &&
            announcements.map(announcement => (
              <li key={announcement.id}>
                <Link to={`/course/${params.id}/announcements/${announcement.id}`}>
                  {announcement.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.line} />
      <div className={styles.content}>
        <h3>Announcements</h3>
        <Route
          exact
          path={`${match.url}`}
          render={() => <p>Please choose an announcement from sidebar!</p>}
        />
        <Route
          path={`/course/:id/announcements/:announcementId`}
          render={routeParams => (
            <AsyncPage {...routeParams} page="Course/Announcements/Announcement" />
          )}
        />
      </div>
    </div>
  );
}
