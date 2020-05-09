/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-09 10:38:11
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-09 16:23:52
 */
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

export const AsyncPage = loadable(
  props => {
    console.log(`loadable ${props.page} component`);
    //通过wepbackChunkName设置打包js文件名称
    return import(/* webpackChunkName: `p_[request]` */ `../pages/${props.page}`);
  },
  {
    fallback: <div>loading...</div>,
  },
);

//延迟加载
export const DelayedAsyncPage = loadable(
  props => {
    console.log(`delayed loadable ${props.page} component`);
    //通过p-min-delay实现延迟加载
    return pMinDelay(
      import(/* webpackChunkName: `p_delayed_[index]_[request]` */ `../pages/${props.page}`),
      500,
    );
  },
  {
    //当import组件加载时间较长时，显示fallback
    fallback: <div>loading...</div>,
  },
);