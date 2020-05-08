/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 20:46:52
 */
import styles from './index.less'
import NavLink from 'umi/navlink'
import { Switch } from 'react-router-dom'
import { Route } from 'umi'
import Home from '../pages/index'
import Calender from '../pages/Calender/index'
import Grade from '../pages/Grade/index'
import Message from '../pages/Message/index'

function BasicLayout (props) {
  return (
    <div>
      <h1 className={styles.title}>Yay! Welcome to my react router code splitting demo!</h1>
      <div className={styles.nav}>
        <NavLink to='/' className={styles.link} exact={true}>
          Home
        </NavLink>
        <NavLink to='/calender' className={styles.link} activeStyle={styles.activeLink}>
          Calender
        </NavLink>
        <NavLink to='/grade' className={styles.link} activeStyle={styles.activeLink}>
          Grades
        </NavLink>
        <NavLink to='/message' className={styles.link} activeStyle={styles.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={styles.content}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/calender'>
            <Calender />
          </Route>
          <Route path='/grade'>
            <Grade />
          </Route>
          <Route path='/message'>
            <Message />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default BasicLayout
