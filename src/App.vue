<template>
  <div id="main">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld /> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        12
      </router-view>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive">
      34
    </router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue"
export default {
  name: 'App',
  components:{
    // HelloWorld
  },
  data(){
    return {
      title:"home"
    }
  },
  mounted() {
    console.log("app Mounted")
  },
  updated(){
    console.log("app updated");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
