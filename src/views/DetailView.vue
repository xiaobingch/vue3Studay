<template>
   <div>
    <h1>This is a Detail page</h1>
    <!-- 子组件的数据 -->
    <div>子组件的数据：{{ val }}</div>
    <!-- 子组件加载时传递的数据 -->
    <div>子组件加载时传递的数据：{{ valOn }}</div>
  </div>
  <!-- 2.通过属性传递数据 -->
  <!-- c.通过自定义事件接收子组件的数据 -->
  <child :pdata="pdata" @send = "send" @send2 = "send2"></child>
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
    let val = ref('');
    let valOn = ref('');
    //1.父组件到子组件
    let pdata  = ref('这是父组件的数据');
    //d.接收子组件传过来的数据
    let send = (data) => {
      val.value = data
    }
    
    let send2 = (data) => {
      valOn.value = data
    }
  
    return{
     pdata,
      send,
      send2,
      val,
      valOn

    }
  }
})

</script>

<style>

</style>
