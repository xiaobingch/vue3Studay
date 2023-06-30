<template>
  <div>
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer> -->
    <div>
      
      {{ num }} ---{{ num2 }}
      和是：{{ sum }}
      <button @click="add">ADD</button>
    </div>
  </div>
</template>


<script>
import navFooter from '../components/navFooter.vue';
import navMain from '../components/navMain.vue';
import navHeader from '../components/navHeader.vue';

import { defineComponent, ref, reactive, toRefs, computed } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter

  },
  setup() {
    let num = ref(10)
    let num2 = ref(20)
    let sum = computed(()=> {
      //返回一个值
      return num.value + num2.value
    })
    let add = () => {
      num.value ++
      num2.value ++
    }
    return {
      num,
      num2,
      sum,
      add
    }

  }
})
</script>

<style scoped></style>