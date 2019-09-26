import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import axiosPlugin from './utils/http';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import 'echarts-gl';
import 'echarts/map/js/china.js' 

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(axiosPlugin);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
