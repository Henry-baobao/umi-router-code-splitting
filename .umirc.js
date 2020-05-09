/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-04-29 16:42:21
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-09 09:40:26
 */
// ref: https://umijs.org/config/
import { resolve } from 'path'

export default {
  treeShaking: true,
  // 只配置入口router，通过react-router的Route指定对应的component
  routes: [
    {path: '/', component: '../layouts/index',
      // 必须设置routes属性，哪怕为空，否则calender、grade和message路由不存在
      routes: []
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
      dynamicImport: {
        webpackChunkName: true
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
