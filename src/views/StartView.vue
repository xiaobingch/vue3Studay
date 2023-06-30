<template>
    <button @click="start">开始任务</button>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'start',
    setup() {
        let name = ref('xiaohong')
        let age = ref(10)
        let obj = ref({
            sex: 'man'
        })
        let router = useRouter()
        let start = () => {
            router.push({
                name: 'home',
                // path: '/home/:name/:age',
                
                //params传参 只能使用name
                //需要在route/index.js path下添加“：参数命”
                params: {
                    name: name.value,
                    age: age.value,
                    // obj: JSON.stringify(obj)
                },
                //qurey传参数，name和path都可以
                // query: {
                //     name: name.value,
                //     age: age.value,
                //     obj: JSON.stringify(obj),
                // }
            });

        }
        return {
            start,
        }
    }

})

</script>
<style></style>
  