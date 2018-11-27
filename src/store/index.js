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
        },
        //购物车中每个商品购买的初始值
        getGoodsInitCount (state){
            var o = {} 
            state.car.forEach(item => {
                o[item.id] = item.count 
            })
            return o 
        },
        //购物车中商品的选择情况
        getGoodsSelected (state){
            var b = {}
            state.car.forEach(item => {
                b[item.id] = item.selected
            })

            return b 
        },
        //计算购物车中商品总数和总价
        getGoodsCountAndAmount(state) {
            var o = {
                count : 0 ,//勾选的商品件数
                amount : 0  //总价

            }
            state.car.forEach(item => {
                if(item.selected === true) {

                    o.count += item.count
                    o.amount+= item.price * item.count
                }
            })
            return o 
        }
    }
  })
