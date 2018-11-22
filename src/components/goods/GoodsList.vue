<template>

  <div class="goods-list"> 
        <div class="goods-item" v-for="item in goodslist" :key="item.id">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name:'GoodsList',
  components:{},
  props:{},
  data(){
    return {
        goodslist:[]
    }
  },
  methods:{
      getGoodsList () {
          axios.get('/api/b/getgoods?pageindex=1')
          .then(res => {
                var data = res.data 
                this.goodslist = data.message              
          }).catch(err => {
             console.log(err);
             
          })
      }

  },
  created(){

      this.getGoodsList()
  },
  mounted(){}
}
</script>
<style lang="stylus"  scoped>
.goods-list 
    display flex
    flex-wrap wrap
    padding 0.1rem 0.2rem
    justify-content: space-between
    .goods-item
        width 49%
        border 1px solid #ccc
        box-shadow 0 0 8px #ccc
        margin 4px 0
        padding 2px
        justify-content space-between
        min-height 293px
        display flex
        flex-direction column
        background #fff
        img 
            width 100%   
        .title
            font-size 14px
            font-weight bold
            padding 0 0.1rem    
        .info
            background-color: #eee
            padding .3rem .15rem         
            .now
                color red
                font-weight bold
                font-size .32rem
            .old
                text-decoration line-through
                font-size .24rem
                margin-left 0.4rem
            .sell
                margin-top .2rem
                display flex
                justify-content space-between

</style>