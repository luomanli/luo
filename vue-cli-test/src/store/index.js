import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



export default new Vuex.Store({
        state: {
            openId: '', // 默认值,
            qrflag: false,
            // id: xxx  如果还有全局状态也可以在这里添加
            // name:xxx
        },
        getters: {

            getValue: state => state.openId

        },
        mutations: {
            setValue(state, data) { //定义的修改 属性的方法
                state.openId = data

            },


        },
        actions: {}

    }




)