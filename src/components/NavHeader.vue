<template>
    <div>
        <input 
        placeholder="请输入任务名称" 
        v-model="value"
        @keydown.enter="enter"
        />
        <button>添加任务</button>
    </div>
</template>


<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'navHeader',
    setup() { 
        let value = ref('')
        let enter = () => {
            console.log(123);
        }
        return {
            value,
            enter
        }
    }


})
</script>


<style scoped></style>