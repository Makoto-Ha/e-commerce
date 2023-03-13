import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
//配置路由
export default new VueRouter({
  routes: [{
      path: '/home',
      component: Home,
      meta: {
        show: true
      }
    },
    {
      path: '/search/:keyword?',
      name: 'search',
      component: Search,
      meta: {
        show: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        show: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        show: false
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
});