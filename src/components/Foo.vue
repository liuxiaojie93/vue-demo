<template>
  <div class="hello">
    <div @click="add">name:{{ name }}</div>
    <div class="hello" @click="go">
      跳转
    </div>
    <div class="hello" @click="goBack">
      goback
    </div>
    <div @click="addCount">
      store:{{count}}
    </div>
      <div >
      store getter :{{newCount}}
    </div>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import { mapGetters, mapState,mapMutations, mapActions } from 'vuex'
export default {
  name: "Foo",
  props: {
    msg: String,
  },
  components: {
    HelloWorld,
  },
  data() {
    return {
      name: 12,
      age: 20,
    };
  },
  computed:{
    ...mapState({
      count:state => state.A.count,
    }),
    ...mapGetters({
      newCount:"A/calcCount"
    })
  },
  
  methods: {
    ...mapMutations(["A/increment"]),//将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ...mapActions({
      incrementAsync:"A/incrementAsync"
    }),
    add() {
      this.name++;
    },
    addCount(){
      this.$store.state.A.count += 20;
      // this.increment({
      //   count:20
      // })
      // this.$store.commit({
      //   type:"increment",
      //   count:10
      // })
    },
    go() {
      this.$router.push({ path: "/bar" });
    },
    goBack() {
      this.$router.go(-1);
    },
    removeKeepAliveCache() {
      if (this.$vnode && this.$vnode.data.keepAlive && this.$vnode.parent) {
        const tag = this.$vnode.tag;
        console.log(this.$vnode, "this.$vnode");
        let caches = this.$vnode.parent.componentInstance.cache;
        let keys = this.$vnode.parent.componentInstance.keys;
        for (let [key, cache] of Object.entries(caches)) {
          if (cache.tag === tag) {
            if (keys.length > 0 && keys.includes(key)) {
              keys.splice(keys.indexOf(key), 1);
            }
            delete caches[key];
          }
        }
      }
      this.$destroy();
    },
  },
  beforeCreate() {
    console.log("Foo beforeCreate");
  },
  created() {
    console.log("Foo created");
  },
  activated() {
    console.log("foo actived");
  },
  mounted() {
    console.log("foo mounted");
    console.log(this.$store);
  },
  beforeUpdate() {
    console.log("foo beforeUpdate");
  },
  updated() {
    console.log("foo updated");
  },
  destroyed() {
    console.log("foo destroyed");
  },
  beforeRouteEnter(to, from, next) {
    console.log("foo beforeRouteEnter", to, from, next);
    next();
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    console.log("foo beforeRouteUpdate", to, from, next);

    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  // beforeRouteLeave(to, from, next) {
  //   if (to.path === "/bar") {
  //     console.log(1212);
  //     // from.meta.keepAlive = true;
  //   } else {
  //     // this.removeKeepAliveCache();
  //   }
  //   console.log("foo beforeRouteLeave", to, from, next);
  //   next();
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
