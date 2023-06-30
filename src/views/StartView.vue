<template>
    <button @click="start">开始任务</button>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'start',
    //组件创建过程
    setup() {
        let name = ref('xiaohong')
        let age = ref(10)
        let obj = ref({
            sex: 'man'
        })
        // onMounted(()=>{
        //     //组件挂载过程
        //     //数据dom
        //     //请求发送
        //     //数据初始化，传参数
        //     console.log('onMounted');
        // })
        // onUnmounted(()=>{
        //     //组件卸载的生命周期
        //     //清除定时器、闭包函数
        //     console.log('onUnmounted');
        // })
        // console.log('setup');
        let router = useRouter()
        let start = () => {
            router.push({
                name: 'home',
                // path: '/home/:name/:age',
                
                //params传参 只能使用name
                //需要在route/index.js path下添加“：参数命”
                // params: {
                //     name: name.value,
                //     age: age.value,
                //     obj: JSON.stringify(obj)
                // },
                //qurey传参数，name和path都可以
                query: {
                    name: name.value,
                    age: age.value,
                    obj: JSON.stringify(obj.value),
                }
            });

        }
        return {
            start,
        }
    }

})

</script>
<style></style>
  