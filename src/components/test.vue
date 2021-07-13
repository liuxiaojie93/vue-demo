<template>
  <div class="hello" @click="go">
    <!-- <h1>Test {{count}}</h1> -->
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: {
    msg: String,
    count:Number
  },
  data() {
    return {
      name: 12,
      age: 20,
    };
  },
  methods:{
      go(){
       this.$router.go(-1)
    }
  },
  created() {
    console.log('test ct');
  },
  mounted(){
    console.log("test mounted");
  },
   beforeUpdate(){
    console.log("test beforeUpdate");
  },
  updated(){
     console.log("test Updated");
  },
  render(h){
      return h("div",{},this.count)
  }
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
