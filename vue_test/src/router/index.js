import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Homepage/Home'
import Init from '@/views/Homepage/Init'
import Tool from '@/views/Homepage/Tool'
import Contact from '@/views/Homepage/Contact';

import NotFound from '@/views/admin/error'



//主要功能:页面跳转
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  //注意routes不要加r
  routes: [
   
    {
      //主页
      path: '/',
      name:'Home',
      component: Home,
      children:[
        {
          //首页
          path:'/',
          name:'Init',
          component:Init,
        },
        
        {
        //工具页
        path: '/tool',
        name:'Tool',
        component: Tool,
      },
      {
        //联系页
        path: '/contact',
        name:'Contact',
        component: Contact,
      }
    ]
    },
    {
      //错误页面404
      path: '*',
      component: NotFound
    }

  ]
})