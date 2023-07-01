<template>
  <div>
    <h1>This is an Detail page</h1>
    <!-- 二、子组件的数据 -->
    <div>子组件的数据：{{  }}</div>
  </div>
  <!-- 2.绑定数据 -->
  <!-- c.通过自定义事件接收子组件的数据 -->
  <child :pdata="pdata" @send = "send"></child>
</template>


<script>
import child from '../components/Child.vue'
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Detail',
  components:{
    child
  },
  setup(){
    //1.父组件到子组件
    let pdata  = ref('这是父组件的数据');
    //d.接收子组件传过来的数据
    let send = (val) => {
      console.log(val);
    }
    return{
     pdata,
      send,

    }
  }
})

</script>

<style>

</style>
