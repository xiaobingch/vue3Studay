<template>
    <div>
        <input placeholder="请输入任务名称" v-model="value" @keydown.enter="enter" />
        <button @click="enter">添加任务</button>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'navHeader',
    setup(props, ctx) {
        let value = ref('')
        let enter = () => {
            ctx.emit('add', value.value)
            value.value = ''
        }

        return {
            value,
            enter
        }
    }


})
</script>


<style scoped></style>