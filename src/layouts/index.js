/*
 * @Description:
 * @Version:
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-09 10:29:01
 */
import styles from './index.less';
import NavLink from 'umi/navlink';
// import { Switch } from 'react-router-dom'
import { Route } from 'umi';
// import Home from '../pages/index';
// import Calender from '../pages/Calender/index';
// import Grade from '../pages/Grade/index';
// import Message from '../pages/Message/index';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

const AsyncPage = loadable(
  props => {
    console.log('loadable component');
    //通过wepbackChunkName设置打包js文件名称
    return import(/* webpackChunkName: `p_[request]_chunk` */ `../pages/${props.page}/index`);
  },
  {
    fallback: <div>loading...</div>,
  },
);

//延迟加载
const DelayedAsyncPage = loadable(
  props => {
    console.log('delayed loadable component');
    //通过p-min-delay实现延迟加载
    return pMinDelay(
      import(/* webpackChunkName: `p_delayed_[index]_[request]` */ `../pages/${props.page}/index`),
      2000,
    );
  },
  {
    //当import组件加载时间较长时，显示fallback
    fallback: <div>loading...</div>,
  },
);

const HomePage = loadable(() => {
  console.log('load home page');
  return import(/* webpackChunkName: `p_index` */ '../pages/index');
});

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
          <HomePage />
        </Route>
        <Route path="/calender">
          <DelayedAsyncPage page="Calender" />
        </Route>
        <Route path="/grade">
          <AsyncPage page="Grade" />
        </Route>
        <Route path="/message">
          <AsyncPage page="Message" />
        </Route>
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calender">
          <Calender />
        </Route>
        <Route path="/grade">
          <Grade />
        </Route>
        <Route path="/message">
          <Message />
        </Route> */}
      </div>
    </div>
  );
}

export default BasicLayout;
