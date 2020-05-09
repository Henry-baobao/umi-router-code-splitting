/*
 * @Description:
 * @Version:
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-09 15:55:52
 */
import styles from './index.less';
import NavLink from 'umi/navlink';
import { Route } from 'umi';
import { AsyncPage, DelayedAsyncPage } from '../utils/AsyncPage';

function BasicLayout(props) {
  console.log('basic layout component');
  return (
    <div>
      <h1 className={styles.title}>Yay! Welcome to my react router code splitting demo!</h1>
      <div className={styles.nav}>
        <NavLink to="/" className={styles.link} exact={true}>
          Home
        </NavLink>
        <NavLink to="/calender" className={styles.link} activeStyle={styles.activeLink}>
          Calender
        </NavLink>
        <NavLink to="/grade" className={styles.link} activeStyle={styles.activeLink}>
          Grades
        </NavLink>
        <NavLink to="/message" className={styles.link} activeStyle={styles.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={styles.content}>
        <Route exact path="/">
          <AsyncPage page="index" />
        </Route>
        <Route path="/calender">
          <DelayedAsyncPage page="Calender/index" />
        </Route>
        <Route path="/grade">
          <AsyncPage page="Grade/index" />
        </Route>
        <Route path="/message">
          <AsyncPage page="Message/index" />
        </Route>
        <Route
          path="/course/:id"
          render={routeParams => <AsyncPage {...routeParams} page="Course/index" />}
        >
          {/* 通过使用withRouter高阶组件，能获params中的id属性 */}
          {/* <AsyncPage page='Course/index' /> */}
          {/* 通过扩展属性的方式，传入的params没有id属性 */}
          {/* <AsyncPage {...props} page='Course/index' />  */}
        </Route>
      </div>
    </div>
  );
}

export default BasicLayout;
