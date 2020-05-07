/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 16:23:09
 */
import styles from './index.less'
import NavLink from 'umi/navlink'

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
        {props.children}
      </div>
    </div>
  )
}

export default BasicLayout
