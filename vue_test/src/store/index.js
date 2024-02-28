import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//全局state对象，用于保存所有组件的公共数据
const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem(state)) : {
  user: {
    name: ''
  }
};

//监听state对象的值的最新状态(计算属性/缓冲)
const getters = {
  getUser(state) {
    return state.user;
  }
};

//唯一一个可以修改state值的方法(同步执行)
const mutations = {
  updataUser(state, user) {
    state.user = user;
  }
};

//异步执行mutations方法
const actions = {
  asyncUpdataUser(context, user) {
    context.commit("updataUser", user);
  }
};

const modules = {

};

const axios = require('axios');

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  axios
})

