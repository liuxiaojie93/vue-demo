import Vue from 'vue'
import Vuex from 'vuex'
import A from "./modules/a"
Vue.use(Vuex)
const store = new Vuex.Store({
    strict: true,
  modules:{
    A
  }
})
export default store;