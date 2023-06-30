<template>
  <div>

    <button @click="goto">goto</button>
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
import { defineComponent} from 'vue'
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
    let router = useRouter()
    let route = useRoute()

    console.log(route.params)

    //num 也会转变为string
    // console.log(typeof(route.query.age));
    let goto = ()=>{
      //push 调整路径
      //go（整数）正前进，负数后退
      //back 返回上一页
      //forword 前进一页
      router.push('/about')
    }
    // let store = useStore()
    // let list = store.state.list  
    // let num = ref(10)
    // let num2 = ref(20)
    // let sum = computed(()=> {
    //   //返回一个值
    //   return num.value + num2.value
    // })
    // let add = () => {
    //   num.value ++
    //   num2.value ++
    // }
    return {
      // num,
      // num2,
      // sum,
      // add
      // list
      goto,
    }

  }
})
</script>

<style scoped></style>