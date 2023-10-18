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
    redirect: {path: '/tool'},
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
      {
        path: '/swiper',
        name: 'Swiper',
        component: () => import('@/pages/swiper'),
        meta: {
          title: '轮播图',
        },
      },
      {
        path: '/xlsx',
        name: 'xlsx',
        component: () => import('@/pages/xlsx'),
        meta: {
          title: 'xlsx文件读取',
        },
      },
      {
        path: '/echarts-map',
        name: 'Eharts-Map',
        component: () => import('@/pages/echarts-map'),
        meta: {
          title: 'echarts地图',
        },
      },

      {
        path: '/img-thief',
        name: 'img-thief',
        component: () => import('@/pages/img-thief/index.vue'),
        meta: {
          title: '图片调色盘',
        },
      },

      {
        path: '/router-skip',
        name: 'router-skip',
        component: () => import('@/pages/router-skip'),
        meta: {
          title: '链接跳转',
        },
      },

      {
        path: '/tool',
        name: 'tool',
        component: () => import('@/pages/tool'),
        meta: {
          title: '工具集成',
        },
      },
      {
        path: '/tc-player',
        name: 'tc-player',
        component: () => import('@/pages/tc-player'),
        meta: {
          title: '腾讯视频',
        },
      },
    ],
  },
];

export default routes;
