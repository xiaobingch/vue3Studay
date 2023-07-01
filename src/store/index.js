import { START_LOCATION } from "vue-router";
import { createStore } from 'vuex';
export default createStore ({
    //定义所需要的状态
    state: {
        list: [
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
        ]
    },
    //同步修改state，都是方法
    //第一个参数state， 第二参数修改的值
    mutations: {
        //添加任务
        addTodo(state, payload) {
            state.list.push(payload)
        },
        //删除任务（下标，个数）
        delTodo(state, payload) {
            state.list.splice(payload,1)
        },
        //清除已完成任务
        clear(state, payload) {
            state.list = payload
        }

    },
    //异步提交muatations
    //第一个参数store，第二个参数修改值
    actions: {
        asyncSetName (store,payload){
            setTimeout(()=>{

            }, 2000);
        }
    },
    modules: {

    }


})