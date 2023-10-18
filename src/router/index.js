import Vue from 'vue';
import VueRouter from 'vue-router';
import routesMap from './router.new';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routesMap,
});

export default router;
