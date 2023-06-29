<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>


<script>
  import NavHeader from '@/components/NavHeader.vue'
  import NavMain from '@/components/NavMain.vue'
  import NavFooter from '@/components/NavFooter.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Home',
    components: {
      NavHeader,
      NavMain,
      NavFooter,
   
    },
    setup() {

    }
  })
</script>

<style scoped>


</style>