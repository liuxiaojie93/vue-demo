import Vue from 'vue'
import App from './App.vue'
import router from "./connect/router"
import VueRouter from 'vue-router'
import store from "../src/store"
console.log(store,"store");
Vue.use(VueRouter)
import { List } from 'vant';

Vue.use(List);
Vue.config.productionTip = false
const main = new Vue({
  router,
  store,
  // render: h => h(App),
  render: h => h(
    App,
  ),
})
main.$mount('#app')
