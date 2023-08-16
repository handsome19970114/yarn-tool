const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },

  {
    path: '/freedo',
    name: 'freedo',
    component: () => import('../views/FreeDo.vue'),
  },

  {
    path: '/v3echarts',
    name: 'V3Echarts',
    component: () => import('../views/EchartsTest.vue'),
  },

  {
    path: '/avola',
    name: 'avola',
    component: () => import('../views/TestAvola.vue'),
  },

  {
    path: '/css',
    name: 'css',
    component: () => import('../views/Css.vue'),
  },
];

export default routes;
