<template>
    <div>
        <div v-if="list.length > 0">
            <div v-for="(item, index) in list" :key="index">
                <div class="item">
                    <input type="checkbox" v-model="item.complete">
                    {{ item.title }}
                    <button class="del" @click="del(item, index)">删除</button>
                </div>
            </div>
        </div>
        <div v-else>
            暂无任务
        </div>
    </div>
</template>



<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    emits: ['del'],
    name: 'navMain',
    props: {
        list: {
            type: Array,
            required: true
        }

    },
    setup(props, ctx) {
        let del = (item, index) => {
            ctx.emit('del', index);
        }
        return {
            del
        }

    }


})
</script>


<style scoped lang="scss">
.item {
    height: 35px;
    line-height: 35px;
    position: relative;
    width: 160px;
    z-index: 999;

    // cursor: pointer;
    button {
        position: absolute;
        right: 20px;
        top: 6px;
        display: none;
    }

    &:hover {
        background-color: #aaa;

        button {
            display: block;
        }
    }

}
</style>