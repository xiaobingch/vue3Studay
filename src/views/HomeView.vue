<template>
  <div>
   {{ name }}-
   {{ num }}-
   {{ arr[1] }}- 
    {{ obj1.age }}
  </div>
</template>


<script>

  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'Home',
    components: {
      
   
    },
    setup(props, ctx) {
      let num = ref(111)
      let name = ref('jack')
      let arr = ref([1, 'aa', 'cc'])
      let obj1 = ref({age:20})

      return {
        name,
        num,
        arr,
        obj1
      }
    } 
  })
</script>

<style scoped>


</style>