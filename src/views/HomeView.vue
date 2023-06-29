<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>


<script>
import navFooter from '../components/navFooter.vue';
import navMain from '../components/navMain.vue';
import navHeader from '../components/navHeader.vue';

import { defineComponent, ref, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter

  },
  setup(props, ctx) {

  }
})
</script>

<style scoped></style>