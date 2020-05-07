/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 11:29:00
 */
// ref: https://umijs.org/config/
import { resolve } from 'path'

export default {
  treeShaking: true,
  // 配置式路由：@Description不会报错（约定式路由会报错）
  // routes: [
  //   {path: '/', component: '../layouts/index',
  //     routes: [
  //       {path: '/', component: '../pages/index'}
  //     ]
  //   }
  // ],
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
