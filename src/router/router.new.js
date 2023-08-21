import AsideMenu from '@/layouts/AsideMenu';
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/',
    name: 'Main',
    meta: {
      title: '首页',
    },
    component: () => import('@/layouts/AsideMenu.vue'),
    redirect: { path: '/home' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home'),
        meta: {
          title: '首页-1',
        },
      },
      {
        path: '/minio',
        name: 'Minio',
        component: () => import('@/pages/minio'),
        meta: {
          title: 'Minio测试',
        },
      },

      {
        path: '/clickoutside',
        name: 'ClickOutSide',
        component: () => import('@/pages/clickoutside'),
        meta: {
          title: '自定义指令点击',
        },
      },
      {
        path: '/todo',
        name: 'Todo',
        component: () => import('@/pages/todo'),
        meta: {
          title: '待做事项',
        },
      },
      // {
      //   path: '/extend',
      //   name: 'Extend',
      //   component: () => import('@/pages/extend'),
      //   meta: {
      //     title: '组件继承',
      //   },
      // },
    ],
  },
];

export default routes;
