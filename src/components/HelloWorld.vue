<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="add">{{ name }}</div>
    <!-- canvas -->
    <canvas id="canvas" width="500" height="500">
    </canvas>
  </div>
</template>

<script>
import {draw } from "../utils/canvas"
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      name: 12,
      age: 20,
    };
  },
  methods:{
    add(){
      this.name++
    },
    go(){
      this.$router.push({path:"/foo"})
    },
  },
  beforeCreate(){
    console.log('Hello beforeCreate');
  },
  created() {
    console.log('Hello created');
  },
  mounted(){
    console.log("Hello mounted");
    console.log(document.querySelector("#main"));
  const canvasEl = document.querySelector("#canvas");
    draw(canvasEl)

  },
  beforeUpdate() {
    console.log("Hello beforeUpdate");
  },
  updated(){
    console.log("Hello updated");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas{
  border: 1px dashed red;
  /* width: 500px;
  height: 500px; */
}
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
