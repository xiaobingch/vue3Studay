<template>
  <div>

    <button @click="goto">goto</button>
    <div>
      {{ name }}
    </div>
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    {{ list }} -->
    <!-- <div>
      
      {{ num }} ---{{ num2 }}
      和是：{{ sum }}
      <button @click="add">ADD</button>
    </div>-->
  </div>
</template>


<script>
import navFooter from '../components/navFooter.vue';
import navMain from '../components/navMain.vue';
import navHeader from '../components/navHeader.vue';
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter

  },
  setup() {
    //全局路由对象
    let router = useRouter()
    //当前路由对象
    let route = useRoute()
    //num 也会转变为string
    // console.log(typeof(route.query.age));
    let name = ref('11111')
    let age = ref('')
    let obj = ref({})
    console.log(route.query.name);
    onMounted(() => {
      name.value = route.query.name

    })

    let goto = () => {
      router.push('/about')
    }

    return {
      name,
      age,
      goto,
    }

  }
})
</script>

<style scoped></style>