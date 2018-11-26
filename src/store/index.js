import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
 Vue.use(Vuex)
  export default new Vuex.Store({
    state,
    mutations,
    getters:{
        // 购物车总数
        getShopcarCount(state) {
            var c = 0 
            state.car.forEach(element => {
                c += element.count 
            })
            return c 
        }
    }
  })
