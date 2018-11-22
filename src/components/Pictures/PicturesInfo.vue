<template>

  <div class="picturesInfo-Container"> 
    <!-- 标题 -->
      <div class="Info-header" v-for="item of imageInfo " :key="item.id ">
          <div class="Info-title">
            {{item.title}}
          </div>
          <div class="Infos">
              <span class="time"> 发表时间：{{item.add_time | dateFormat}}</span>
              <span class="click">点击：{{item.click}} 次 </span>
          </div>    

          <hr>

            <!-- 缩略图   使用插件-->     
          <div class="thumbs">
            <vue-preview :slides="thumbs" >

            </vue-preview>
          </div>

            <!-- 缩略图介绍 -->

          <p class="Info-content" v-html="item.content">   </p>
      </div> 

      
      

    
      <!-- 评论子组件  common组件复用-->
      <image-comment :id = "this.imagid"> </image-comment>

  </div>

</template>

<script>
import imageComment from '@/components/common/Comment'
import axios from 'axios'
export default {
  name:'PicturesInfo',
  components:{
    imageComment
  },
  props:{},
  data(){
    return {
       imagid:this.$route.params.id ,
       imageInfo : [] ,
       thumbs : []
    }
  },
  methods:{
    getPicInfo () {
      axios 
      .get('api/b/getimageInfo/'+this.imagid)
      .then(res=>{
        var data = res.data 
         if(data.status ===0) {
           this.imageInfo = data.message 
         }
        
      })

    },

    getThumbs () {
      axios
      .get('api/b/getthumimages/'+this.imagid)
      .then(res=> {
          var data = res.data
          data.message.forEach(element => {
              element.w = 600
              element.h = 400
              element.msrc = element.src
          })
          this.thumbs = data.message
          

      })
    }

    
  },
  created () {
    this.getThumbs()
  },
  mounted() {
    this.getPicInfo()
     
  },
  
}
</script>
<style lang="stylus"  scoped>
.picturesInfo-Container
  background #fff
  .Info-header
    padding .2rem 0
    .Info-title
      font-size .32rem
      font-weight bold 
      color #26a2ff
      text-align center
      margin .45rem 0
    .Infos
      display flex
      padding 0 .14rem
      color #888
      justify-content space-between
    .Info-content
      padding .1rem .15rem 
      color #555
      line-height .45rem
      font-weight bold  

</style>
<style lang="stylus">
.my-gallery
    display flex
    flex-wrap wrap
    figure 
      width: 100px;
      height: 100px;
      margin: 10px
      box-shadow: 0 0 8px #999
    img
      width 100%
      height 100% 
</style>
