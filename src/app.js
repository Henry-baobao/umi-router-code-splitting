/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-08 16:25:21
 */
export const dva = {
  config: {
    onError(err) {
      err.preventDefault()
      console.error(err.message)
    }
  }
}

// export function pathRoutes (routes) {
//   console.log('routes: ', routes)
//   routes[0].unshift({
//     path: '/henry',
//     component: require('@/extraRoutes/henry').default
//   })
// }
