<template>
  <div class="hello" >
    <h1 @click="add">bar {{count}}</h1>
    <Test :count="count">
    </Test>
  </div>
</template>

<script>
const Test ={
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
  beforeCreate(){
    console.log("Bar beforeCreate");
  },
  created(){
    console.log("Bar created");
  },
  mounted(){
    console.log("Bar mounted");
  },
   beforeUpdate(){
    console.log("Bar beforeUpdate");
  },
  updated(){
     console.log("Bar Updated");
  },
  render(h){
    console.log("test rener");
      return h("div",12)
  }
}
// import Test from "./test.vue"
export default {
  name: "Bar",
  props: {
    msg: String,
  },
  components:{
    Test
  },
  data() {
    return {
      name: 12,
      age: 20,
       count:1
    };
  },
  methods:{
      go(){
       this.$router.go(-1)
    },
    add(){
      this.count++
    }
  },
  beforeUpdate(){
    console.log("sup beforeUpdate");
  },
  updated(){
     console.log("sup Updated");
  },
  created() {
    console.log('sup ct');
  },
  mounted(){
    console.log("sup mounted");
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
