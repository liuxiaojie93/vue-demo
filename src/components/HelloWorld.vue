<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="add">{{ name }}</div>
    <!-- canvas -->
    <canvas id="canvas" width="500" height="500">
    </canvas>
    <div class="box">
       <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="item in list" :key="item">{{item}}</div>
    </van-list>
    </div>
     
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
        loading: false,
      finished: false,
       list: [1],
    };
  },
  methods:{
    onLoad() {
      console.log("@@@-------------------onLoad");
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
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
.box{
  height: 400px;
  overflow: scroll;
}
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
