import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import './eventBus.js';

Vue.config.productionTip = false
// 全局指令
import vLazy from "./directives/lazy.js";
Vue.directive("lazy", vLazy)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')