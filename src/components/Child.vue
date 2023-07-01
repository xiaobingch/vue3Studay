<template>
    <div>
      <h1>This is an child page</h1>
      <!-- 4.渲染数据到模板 -->
      <div>父组件数据：{{ pdata }}</div>
      <!-- a.通过点击传送数据到父组件 -->
      <button @click="send">传递数据到父组件</button>
    </div>
  </template>
<script>
import { defineComponent, onMounted, ref } from 'vue';


export default defineComponent({
  name: 'Child',
  //3.通过props接收父组件的数据，不可以直接修改，数据可直接用不用return
  props: {
    pdata: {
      type: String,//类型校验
      // default: '默认数据',//默认值
      // required:true,//必传
    }
  },
  setup(props, ctx){
    let cdata = ref('这是点击事件传过来的子组件的数据');
    let cdataOn = ref('这是子组件页面加载时就传过来的数据');
    let send = ()=>{
      //b.通过ctx.emit分发事件，第一个参数：事件名称；第二参数：携带数据
      ctx.emit('send', cdata.value)
    }
    //一、加载页面时传递数据到父组件
    onMounted(() => {
      ctx.emit('send', cdataOn.value)
    })
    return {
      cdata,
      send,
      cdataOn
    }

  }

})

</script>