import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vuex from 'vuex'
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts

//使用Vue-Router
Vue.use(VueRouter);

//使用ElementUI
Vue.use(ElementUI);

//使用Vuex
Vue.use(Vuex);

//使用axios
Vue.prototype.$axios=axios;

axios.defaults.baseURL = 'http://10.136.154.33:8000/'

Vue.config.productionTip = false

/*
//路由跳转之前
router.beforeEach((to,from,next)=>{
  //
  let isLogin = sessionStorage.getItem('isLogin');
  //注销
  if(to.path=='/logout'){
    //清空isLogin的值,表示未登录
  sessionStorage.clear();
  //跳转到登录页面
  next({path:'/login'});
  }else if(to.path=='/login'){
    //判断是否登录，不为空(已登录)，跳转到首页
    if(isLogin!=null){
      next({path:'/main'});
    }
  }else if(isLogin==null){
    next({path:'/login'});
  }
  next();
})

*/

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
