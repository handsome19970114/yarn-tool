import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAgile from 'vue-agile';
import * as echarts from 'echarts';
import '@/styles/variable.scss';
import 'animate.css';
Vue.use(VueAgile);

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
