<template>

  <div> 
    <transition
    >
        <div class="ball" v-show='ballFlag' ref='ball'></div>  
    </transition>
    


      <!-- 轮播图 -->
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <div class="wrapper">
                    <swiper :options="swiperOption"  v-if="lunbo.length>1">
                    <!-- slides -->                         
                        <swiper-slide v-for="item of lunbo" :key="item.src">
                        <img class="loop" :src="item.src" >
                        </swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-pagination"  slot="pagination"></div>
                    
                    </swiper>
                </div>
            </div>
        </div>
    </div>

        <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsInfos.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsInfos.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsInfos.sell_price }}</span>
          </p>
          <p class="quantities">购买数量： <num-box></num-box></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click = 'addGoods'>加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

        <!-- 商品参数区域 -->
    <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                <p>商品货号：{{ goodsInfos.goods_no }}</p>
                <p>库存情况：{{ goodsInfos.stock_quantity }}件</p>
                <p>上架时间：{{ goodsInfos.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="ToDesc(id)"> 图文介绍 </mt-button>
                <mt-button type="danger" size="large" plain @click="ToComment(id)"  >商品评论</mt-button>
            </div>
    </div> 
  </div>

</template>

<script>
import axios from 'axios' 
import numBox from '@/components/common/GoodsInfo_numbox'
export default {
  name: "goodsInfoss",
  components: {numBox},
  props: {},
  data() {
    return {
        id : this.$route.params.id ,
        goodsInfos: {} ,
        lunbo : [],
        swiperOption: {
            pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            type: 'fraction'
            },
            observer: true,
            observeParents: true,
            loop: true,
        },
        ballFlag : true 
    };
  },
  watch: {},
  computed: {},
  methods: {
      getlunbo () {
          axios 
          .get('api/b/getthumimages/'+this.id)
          .then(res => {
                var data = res.data 
                this.lunbo = data.message    
          })
      },
      getInfo () {
          axios 
          .get('api/b/goods/getinfo/'+this.id)
          .then(res => {
              this.goodsInfos = res.data.message[0] 
              
          })

      },
      ToDesc (id) {
          this.$router.push({
              name:'GoodsDesc',
              params : { id }
          })
      },
      ToComment (id) {
          this.$router.push({
              name:'GoodsComment',
              params : { id }
          })
      },
      addGoods () {
          this.ballFlag = true 
         
           
      }


  },
  created() {
      this.getInfo()
      this.getlunbo() 


  },
  mounted() {
       console.log(this.$refs.ball)
       const box = document.getElementsByClassName('mui-numbox-input')[0].getBoundingClientRect()
       console.log(box);
       
  }
};
</script>
<style lang="stylus"  scoped>
.wrapper
    width: 100%;
    height: 0;
    padding-bottom: 65%;
    .swiper-pagination
      height: 0.3rem;
      width: 100%;
    img 
      width 100%
      height 3.8rem
.mui-card-header
    font-weight bold 
    font-size .30rem
.price
    margin-bottom 0.2rem
    del
        text-decoration line-through
    .now_price 
        color red
        font-size .3rem
        font-weight bold  
.quantities
    margin-bottom .12rem        
.mui-card-footer 
    display block
.mui-card-footer button 
    margin 0.2rem 0
.mui-card-content-inner p 
    margin 0.23rem 0
    font-size .25rem
.ball 
    background red 
    position absolute
    width 16px 
    height 16px 
    border-radius 50%
    z-index 99               

</style>