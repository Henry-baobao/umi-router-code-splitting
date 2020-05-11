<!--
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-11 11:00:11
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-11 16:18:56
 -->
# react-router-code-splitting
-----------------------------

## 介绍
基于umi框架搭建，分别实现umi的约定式路由、配置式路由及自定义路由，其中自定义路由根据react-router和loadable component实现代码分隔
分支与对应实现功能如下：
1. **master分支**：实现umi约定式路由
2. **config-router分支**：实现umi配置式路由
3. **route-splitting分支**：根据react-router和loadable component实现自定义路由和基于路由的代码分隔

## 技术栈
+ [*umi*][1]: Pluggable enterprise-level react application framework
+ [*loadable-components*][3]: The recommended Code Splitting library for React, including Server Side Rendering.
+ [*react-router*][2]: Declarative routing for React

## 踩过的坑
### 1. Annotation fails to parse
$~~~~~~~~$使用约定式路由时，umi会自动检查pages下各js文件的注释头，查看是否有扩展路由，比如pages/index.js里包含如下注释：
```
/**
 * title: Index Page
 * Routes:
 *   - ./src/routes/a.js
 *   - ./src/routes/b.js
 */
```
则会自动生成路由配置：
```
[
  { path: '/', component: './index.js',
    title: 'Index Page',
    Routes: [ './src/routes/a.js', './src/routes/b.js' ],
  },
]
```
因此，会在@Description报错（**目前发现该错误可忽略**）。使用配置式路由时@Description不会报错。
### 2. umi代码分离配置
```
// 配置dynamicImport实现路由级的动态加载
// loadingComponent属性在路由切换时渲染（切换时间较长可看到渲染的组件内容）
// dynamicImport: false,
dynamicImport: {
  webpackChunkName: true,
  loadingComponent: './extras/loading',
  // 控制路由splitting的层级
  level: 4
},
```
### 3. 自定义路由
+ 需配置入口router
```
// 只配置入口router，通过react-router的Route指定对应的component
routes: [
  {path: '/', component: '../layouts/index',
    // 必须设置routes属性，哪怕为空，否则calender、grad和message路由不存在
    routes: []
  }
]
```
+ 需配置dynamicImport
```
//需配置dynamicImport属性，至少设置为true，否则打包不会进行code splitting
dynamicImport: true
```
+ react router中Route属性
```
{/* 嵌套路由 */}
{/* 其中component传入方法（function或class），然后react.createElement，组件自动包含route props
Route接收component、render和children属性
render接收函数，可将route props传入到加载的组件中 */}
<Route exact path={`${match.url}`} render={() =<h2>Course Dashboard</h2>} />
<Route
  path={`/course/:id/announcements`}
  {/*render方法可以将Route的location、match等参数通过routeParams通过扩展属性的方式传递给对应component*/}
  render={routeParams => <AsyncPage {.routeParams} page="Course/Announcements/index">}
/>
```

## 部署
### 1. Clone Repository
`git clone https://github.com/Henry-baobao/umi-router-code-splitting.git`

### 2. 安装package
```
cd umi-router-code-splitting

npm install 或 yarn 
```

### 3. 运行
```
npm start 或 yarn start
```

## 参考
>[react-router-huge-apps-refactor][4]: Implicit code-splitting and chunk-loading with React Router and Webpack

[1]: https://github.com/umijs/umi   "umi" 
[2]: https://github.com/ReactTraining/react-router  "react-router"
[3]: https://github.com/gregberge/loadable-components   "loadable components"
[4]: https://github.com/echenley/react-router-huge-apps-refactor    "react-router-huge-apps-refactor"