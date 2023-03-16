import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
// 使用插件
Vue.use(VueRouter);

export default new VueRouter({
  routes,
  scrollBehavior() {
    return {y: 0}
  }
});