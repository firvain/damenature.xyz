import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import User from './views/User.vue';
import Callback from './components/Callback.vue';
// import LandingLoggedOut from './components/LandingLoggedOut.vue';
// import LandingLoggedIn from './components/LandingLoggedIn.vue';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      // beforeEnter: (to, from, next) => {
      //   console.log(router.app.$auth.isAuthenticated());
      //   if (router.app.$auth.isAuthenticated()) {
      //     next();
      //   } else {
      //     next(false);
      //   }
      // },
    },
    // {
    //   path: '*',
    //   redirect: '/home',
    // },
  ],
});

export default router;
