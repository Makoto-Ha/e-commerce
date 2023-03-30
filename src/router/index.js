import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
import store from '@/store';
// 使用插件
Vue.use(VueRouter);

let router =  new VueRouter({
  routes,
  scrollBehavior() {
    return {y: 0}
  }
});

router.beforeEach(async (to, from, next) => {
  if(localStorage.getItem('TOKEN')) {
    if(to.path === '/login' || to.path === '/register') {
      return next('/home');
    }

    if(store.state.user.userInfo.name) {
      return next();
    }else {
      await store.dispatch('getUserInfo');
      return next();
    }
  }else {
    await store.dispatch('getUserInfo');
    let toPath = to.path;
    if(toPath.includes('/trade') || toPath.includes('/pay') || toPath.includes('/center')) {
      return next(`/login?redirect=${toPath}`);
    }
    next();
  }
  
});

export default router;