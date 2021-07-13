import VueRouter from 'vue-router'

import Foo from "../components/Foo.vue"
import Bar from "../components/Bar.vue"
import Hello from "../components/HelloWorld.vue"
const routes = [
    { path: '/', component:Hello },
    { path: '/foo', 
    component: Foo, 
    meta: 
    {
        keepAlive: false // 需要被缓存
    } 
    },
    { path: '/bar', component: Bar }
  ]

  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

  router.beforeEach((to, from, next) => {
      console.log("beforeEach",to, from, );
      next()
  })
  router.afterEach((to, from) => {
    console.log("afterEach",to, from, );
    // ...
  })
  export default router