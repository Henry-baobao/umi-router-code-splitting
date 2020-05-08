/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-08 17:18:00
 */
// ref: https://umijs.org/config/
import { resolve } from 'path'

export default {
  treeShaking: true,
  // master分支未约定式路由
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
      // 配置dynamicImport实现路由级的动态加载
      // loadingComponent属性在路由切换时渲染（切换时间较长可看到渲染的组件内容）
      // dynamicImport: false,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './extras/loading',
        // 控制路由splitting的层级
        level: 4
      },
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
