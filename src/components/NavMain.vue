<template>
    <div v-for="(item, index) in list" :key="index">
        <div>
            <input type="checkbox" v-model="item.complete">
            {{ item.title }}
            <button>Del</button>
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
        return {
            list,
        }

    }


})
</script>


<style scoped></style>