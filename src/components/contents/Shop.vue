<template>

  <div class="shopcar-container"> 

        <div class="goods-list">
          <!-- 每个商品列表项 -->
            <div class="mui-card" v-for="(item, index) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch>

                        </mt-switch>
                        <img :src="item.thumb_path" alt="图片可能已丢失">
                        <div class="goodInfo">
                            <h1>  {{item.title}} </h1>
                            <p>
                                <span class="price"> ￥{{ item.sell_price }} </span> 
                                <numbox>   </numbox>
                                <a href="#">删除</a>
                            </p>    
                        </div>        
                    </div> 
                </div>
            </div>
        </div>
        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner countAll">
                    <div class="left">
                        <p class="left-top">总计（不含运费）</p>
                        <p>已勾选商品 <span class="red"></span> 件， 总价 <span class="red">￥</span></p>   
                    </div>   
                    <mt-button type="danger">去结算</mt-button>   
                </div> 
            </div>
        </div>
    
  </div>

</template>

<script>
import axios from 'axios'
import numbox from '../common/Shopcar_numbox'
export default {
  name:'Shopcar',
  components:{ numbox },
  data(){
    return {
        goodslist : []
    }
  },
  created() {
      this.getGoodsList()
  },
  methods: {
      getGoodsList () {
          var idArr = [] 
          this.$store.state.car.forEach(element => {
              idArr.push(element.id )
          })
           // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
          if( idArr.length <= 0 ) {
              return 
          }
         axios
         .get("api/b/goods/getshopcarlist/" + idArr.join(","))
         .then(res => {
             if(res.data.status === 0) 
             this.goodslist = res.data.message
         })
      }
  }
  
}
</script>
<style lang="stylus"  rel="stylesheet/stylus"scoped>
.shopcar-container 
    background-color: #eee
    overflow: hidden
    .mui-card-content-inner
        display flex
        align-items center
    .goods-list img 
        width 60px
        height 60px
    .goods-list h1 
        font-size 13px
        line-height .4rem
        margin-top 5px
        margin-bottom 5px
        font-weight bold
    .price
        color: red
        font-weight: bold
    .countAll    
        display: flex
        justify-content: space-between
        align-items: center
        .red 
            color: red
            font-weight: bold
            font-size: 16px
        .left .left-top 
            margin .1rem 0
              
</style>