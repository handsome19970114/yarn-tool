import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAgile from 'vue-agile';
import * as echarts from 'echarts';
import VChart from 'vue-echarts';
import '@/styles/index.scss';
import 'animate.css';
import plugin from '@/utils/plugins/plugin';
import '@/utils/tool/rem';

import CustomMessage from '@/custom-components/custom-message';

Vue.component('v-chart', VChart);
Vue.use(VueAgile);
Vue.use(plugin);

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$echarts = echarts;

const install = (Vue, opts = {}) => {
  Vue.prototype.$customMsg = CustomMessage;
};
install(Vue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
