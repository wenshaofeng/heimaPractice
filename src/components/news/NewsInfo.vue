<template>

  <div class="newsinfo-container"> 
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

</template>

<script>
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
                  console.log(this.news);
                       
              }         
              
             
          })
      }
  },
  mounted () {
      this.getnewInfo()
  }
  
}
</script>
<style lang="stylus"  scoped>
    
    .Info>>> p
        font-size .33rem      
    .newsinfo-container
        padding 0.3rem 0.3rem
        overflow hidden
        background #fff
        .news-title
            font-size .4rem
            text-align center;
            margin .34rem 0;
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