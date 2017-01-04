// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource);
Vue.use(VueRouter);

//路由vue视图配置
import  Index from './components/Index.vue';
import Setting from './components/Setting.vue';
import Login from './components/Login.vue';
import aboutSoft from './components/Setting/aboutSoft.vue';

//路由配置
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path : '/', component : Index
    },
    {
      path : '/Setting', component : Setting,
    },
    {
      path : '/Setting/aboutSoft', component : aboutSoft,
    },
    {
      path : '/Login', component : Login
    },
  ]
})


/* 初始化一个路由视图,并挂载到#app上 */
const app = new Vue({
  router : router,
  render: h => h(App)
}).$mount('#app')
