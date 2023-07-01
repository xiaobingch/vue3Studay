<template>
  <div>
    <nav-header @add='add'></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear = 'clear'></nav-footer>
  </div>
</template>


<script>
import navFooter from '../components/navFooter.vue';
import navMain from '../components/navMain.vue';
import navHeader from '../components/navHeader.vue';
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter

  },
  setup() {
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let value = ref('')
    //添加任务
    let add = (todo) => {
      value.value = todo
      let flag = true
      list.value.map(item => {
        if (item.title === value.value) {
          flag = false
          alert('任务已存在！');
        }
      })
      if (flag) {
        store.commit('addTodo', {
          title: value.value,
          complete: false
        });
      }

    }
    //删除任务
    let del = (index) => {
      store.commit('delTodo',index)
    }

    //清除已完成任务
    let clear = (val) => {
       store.commit('clear',val)
    }

    return {
      add,
      value,
      list,
      del,
      clear
    }

  }
})
</script>

<style scoped></style>