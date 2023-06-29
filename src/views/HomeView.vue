<template>
  <div>
   {{ name }}-
   {{ obj }}-
   {{ age }}- 
    {{ sex }}
  </div>
</template>


<script>

  import { defineComponent, ref, reactive, toRefs} from 'vue'

  export default defineComponent({
    name: 'Home',
    components: {
      
   
    },
    setup(props, ctx) {
      // let num = ref(111)
      // let name = ref('jack')
      // let arr = ref([1, 'aa', 'cc'])
      // let obj1 = ref({age:20})


      let data = reactive({
        name: 'jack',
        age: 20,
        sex: ['man', 'wuman'],
        obj: {price:100}
      })

      return {
        ...toRefs(data)
        // name,
        // num,
        // arr,
        // obj1
      }
    } 
  })
</script>

<style scoped>


</style>