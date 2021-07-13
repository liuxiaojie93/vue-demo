
const state = ()=>({
    count:1
});
const mutations =  {
    increment (state,payload) {
      console.log("payload",payload);
      state.count+=payload.count;
    }
  };
  const  actions = {
    incrementAsync(context){
        console.log(context,"context");
        setTimeout(()=>{
            context.commit("increment",{count:30})
        },3000)
      }
  };
  const  getters = {
    calcCount:state=>{
        return state.count+1;
    }
  }

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};