<template>

  <div class='content'> 
    <!-- 轮播图 -->
    <div class="wrapper">
       <swiper  :options="swiperOption"  v-if="images.length>1">
      <!-- slides -->
          
        <swiper-slide v-for="item of images" :key="item.enddate">
          <img class="loop" :src="item.url" >
        </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
    
      </swiper>

    </div>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Main/NewsList">
                <img src="../../assets/lib/images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/lib/images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/lib/images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
               <img src="../../assets/lib/images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/lib/images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
               <img src="../../assets/lib/images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
		            
		</ul> 
   
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  components: {},
  props: {},
  data() {
    return {
      images: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        observer: true,
        observeParents: true,
        loop: true,
        effect: "flip",
        flipEffect: {
          slideShadows: true,
          limitRotation: true
        }
      }
    };
  },
  created: function() {
    for (var i = 0; i < 6; i++) {
      this.getlunbo();
    }
  },
  methods: {
    getlunbo() {
      var that = this.images;
      axios
        .post("api/a", {
          d: Math.floor(100 * Math.random()),
          type: "json"
        })
        .then(res => {
          var data = res.data.data;
          this.images.push(data);
        });
    }
  }
};
</script>
<style lang="stylus"  rel="stylesheet/stylus"scoped>
.content
  height: 11rem;
  background #fff
  .wrapper
    width: 100%;
    height: 0;
    padding-bottom: 56%;
    .swiper-pagination
      height: 0.3rem;
      width: 100%;
    img 
      width: 100%;
  .mui-table-view
    background #fff  
    .mui-table-view-cell
      border 0
      img 
        width 1.3rem
      .mui-media-body
        font-size 0.28rem
       
</style>