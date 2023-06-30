<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="back">返回上一页</button>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'about',
  setup() {
    let router = useRouter()
    let back = ()=>{
      // router.back()
      router.go(-1)

    }
    return{
      back,
    }
  }

})

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
