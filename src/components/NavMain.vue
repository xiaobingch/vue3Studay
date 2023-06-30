<template>
    <div v-for="(item, index) in list" :key="index">
        <div class="item">
            <input type="checkbox" v-model="item.complete">
            {{ item.title }}
            <button class="del" @click="del(item, index)">Del</button>
        </div>

    </div>
</template>


<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'navMain',
    setup() {
        let list = ref([
            {
                title: 'eat',
                complete: false
            },
            {
                title: 'sleep',
                complete: false
            },
            {
                title: 'walk',
                complete: false
            }
        ])
        let del = (item, index) => {
            console.log(item)
            console.log(index)
        }
        return {
            list,
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