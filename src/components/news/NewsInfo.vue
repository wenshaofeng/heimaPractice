<template>

  <div class="newsinfo-container" ref='wrapper'> 
      <div class="content">
            <h1 class="news-title"> {{ news.title }} </h1>
            <p class="subtitle">
             <span class="postTime">  发表时间 {{news.add_time | dateFormat('YYYY-MM-DD')}}   </span>
             <span class="click">   点击: {{news.click}} 次 </span>
            </p>  
            <hr>

        <!-- 新闻内容 -->
            <div class="Info" v-html="news.content">

            </div>
        <!-- 评论 -->
            <comment-box :id='this.id'> </comment-box>
      </div>
        
  </div>

</template>

<script>
import BScroll from 'better-scroll'
import Comments from '../common/Comment'
import axios from 'axios'
export default {
  name:'NewsInfo',
  components:{  "commentBox": Comments  },
  props:{},
  data(){
    return {
        id : this.$route.params.id,
        news:{}
    }
  },
  methods : {
      getnewInfo(){
          axios
          .get('api/b/getnew/'+this.id)
          .then(res=>{
              if(res.data.status === 0 ){
                  let data = res.data.message
                  this.news=data[0]            
                       
              }                            
          })
      }

  },
  mounted () {
      this.$nextTick(() => {
          setTimeout(()=>{
                this.scroll = new BScroll(this.$refs.wrapper, {})
          },200)
            
        })
       
      this.getnewInfo()
      

  }
  
}
</script>
<style lang="stylus"  scoped>
    
    .Info>>> p
        font-size .33rem      
    .Info>>>img 
        width 100%
        margin .1rem   
    .newsinfo-container
        position absolute
        padding-top .5rem
        padding-left .3rem
        padding-right .3rem
        background #fff
        height 12.6rem
        .news-title
            padding-top .26rem
            font-size .4rem
            text-align center;
            margin-top .64rem
            margin-bottom .34rem
            color red;
        .subtitle
            font-size .3rem
            text-align center
            justify-content space-between 
            display flex   
            color #226aff
            padding-bottom 0.2rem
    .Info
        font-size .4rem
        margin-bottom .3rem
        
</style>