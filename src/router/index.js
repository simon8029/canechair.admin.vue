import Vue from 'vue';
import VueRouter from 'vue-router';
import HighLevelRoutes from '@router/high-level-routes.js';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: HighLevelRoutes

})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token");
//   if (!token && to.path !== '/login') {
//     next('/login');
//   } else {
//     next();
//   }
// })

export default router;