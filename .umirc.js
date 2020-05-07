/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 19:48:30
 */
// ref: https://umijs.org/config/
import { resolve } from 'path'

export default {
  treeShaking: true,
  // 配置式路由：@Description不会报错（约定式路由会报错）
  routes: [
    {path: '/', component: '../layouts/index',
      routes: [
        {path: '/', component: '../pages/index'},
        {path: '/calender', component: '../pages/Calender/index'},
        {path: '/grade', component: '../pages/Grade/index'},
        {path: '/message', component: '../pages/Message/index'},
        {path: '/course/:id', component: '../pages/Course/$id/_layout',
          routes: [
            {path: '/course/:id', component: '../pages/Course/$id/index'},
            {path: '/course/:id/grades', component: '../pages/Course/$id/grades'},
            {path: '/course/:id/announcements',component: '../pages/Course/$id/announcements/_layout',
              routes: [
                {path: '/course/:id/announcements',component: '../pages/Course/$id/announcements/index'},
                {path: '/course/:id/announcements/:announcementId',component: '../pages/Course/$id/announcements/$announcementId'}
            ]},
            {path: '/course/:id/assignments',component: '../pages/Course/$id/assignments/_layout',
              routes: [
                {path: '/course/:id/assignments',component: '../pages/Course/$id/assignments/index'},
                {path: '/course/:id/assignments/:assignmentId',component: '../pages/Course/$id/assignments/$assignmentId'}
            ]}
        ]}
      ]
    }
  ],
  alias: {
    '@': resolve(__dirname, './src')
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'react-router-code-splitting',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//
        ]
      }
    }]
  ]
}
