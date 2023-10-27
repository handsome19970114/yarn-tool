/**
 * @desc 参数说明
 * @param { Boolean } wetherDisplayInTheMenu 是否显示在菜单栏 true显示 false隐藏
 */
const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {title: '登录'},
    component: () => import('@/pages/login.vue'),
    wetherDisplayInTheMenu: false,
  },
  {
    path: '/',
    name: 'Main',
    meta: {title: '控制台', icon: 'el-icon-house'},
    component: () => import('@/layouts/AsideMenu.vue'),
    wetherDisplayInTheMenu: true,
    redirect: {path: '/tool'},
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home'),
        meta: {
          title: '其他测试',
          icon: 'el-icon-monitor',
        },
      },

      {
        path: '/img-thief',
        name: 'img-thief',
        component: () => import('@/pages/img-thief/index.vue'),
        meta: {
          title: '图片调色盘',
          icon: 'el-icon-pie-chart',
        },
      },

      {
        path: '/tool',
        name: 'tool',
        component: () => import('@/pages/tool'),
        meta: {
          title: '工具集成',
          icon: 'el-icon-coin',
        },
      },

      {
        path: '/assort',
        component: () => import('@/pages/assort'),
        meta: {
          title: '配套',
          icon: 'el-icon-document',
        },
      },

      // {
      //   path: '/vue-extend',
      //   name: 'vue-extend',
      //   component: () => import('@/pages/vue-extend'),
      //   meta: {
      //     title: '组件注册成方法',
      //     icon: 'el-icon-receiving',
      //   },
      // },

      // {
      //   path: '/router-skip',
      //   name: 'router-skip',
      //   component: () => import('@/pages/router-skip'),
      //   meta: {
      //     title: '链接跳转',
      //   },
      // },
      // {
      //   path: '/tc-player',
      //   name: 'tc-player',
      //   component: () => import('@/pages/tc-player'),
      //   meta: {
      //     title: '腾讯视频',
      //   },
      // },

      // {
      //   path: '/extend',
      //   name: 'extend',
      //   component: () => import('@/pages/extend'),
      //   meta: {
      //     title: '组件继承',
      //   },
      // },
      // {
      //   path: '/minio',
      //   name: 'Minio',
      //   component: () => import('@/pages/minio'),
      //   meta: {
      //     title: 'Minio测试',
      //   },
      // },

      // {
      //   path: '/clickoutside',
      //   name: 'ClickOutSide',
      //   component: () => import('@/pages/clickoutside'),
      //   meta: {
      //     title: '自定义指令点击',
      //   },
      // },
      // {
      //   path: '/todo',
      //   name: 'Todo',
      //   component: () => import('@/pages/todo'),
      //   meta: {
      //     title: '待做事项',
      //   },
      // },
      // {
      //   path: '/swiper',
      //   name: 'Swiper',
      //   component: () => import('@/pages/swiper'),
      //   meta: {
      //     title: '轮播图',
      //   },
      // },
      // {
      //   path: '/xlsx',
      //   name: 'xlsx',
      //   component: () => import('@/pages/xlsx'),
      //   meta: {
      //     title: 'xlsx文件读取',
      //   },
      // },
      // {
      //   path: '/echarts-map',
      //   name: 'Eharts-Map',
      //   component: () => import('@/pages/echarts-map'),
      //   meta: {
      //     title: 'echarts地图',
      //   },
      // },
    ],
  },

  {
    path: '*',
    name: '404',
    component: () => import('@/pages/404'),
  },
];

export default routes;
