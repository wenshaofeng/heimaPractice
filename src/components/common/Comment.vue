<template>

  <div class="Comments-container"> 
      <h1 class="comment-title">发表评论</h1>
      <hr>

      <textarea class="comment-input"  placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" >

      </textarea>

      <mt-button size="large" type="primary">发表评论</mt-button>

      <div class="comments-cell" v-for="(item,index) of comments" :key="index">  
          <p class="comments-user">
        {{(index+1)}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}
         </p>
          <p class="comments-info">
             {{item.content === 'null'? '此用户很懒，什么都没说' : item.content===""?  '此用户很懒，什么都没说':item.content }}
          </p>
      </div>

      <mt-button size="large" type="danger" plain @click="getMore">加载更多</mt-button>
  </div>

</template>

<script>
import axios from 'axios'
import { Toast } from "mint-ui"
import { log } from 'util';
export default {
  name:'Comment',
  components:{},
  props:['id'],
  data(){
    return {
        comments : [] ,
        pageIndex : 1
    }
  },
  
  methods:{
      getcomments (){
          axios
          .get('api/b/getcomments/'+this.id+'?pageindex='+this.pageIndex)
          .then(res=>{
              if(res.data.status ===0){
                  var data = res.data
                  console.log(data);
                  
                  this.comments = this.comments.concat(data.message)                 
              }else{
                  Toast('获取评论失败！')
              }
              
              
          })
      },
      getMore() {
        this.pageIndex ++
        this.getcomments()
      }

  },
  mounted(){
      this.getcomments()
  }
}
</script>
<style lang="stylus"  scoped>
    .comment-title
        font-size .4rem
        font-weight bold
    hr 
        display block
        unicode-bidi isolate
        margin-block-start 0.5em
        margin-block-end 0.5em
        margin-inline-start auto
        margin-inline-end auto
        overflow hidden
        border-style inset
        border-width 1px 
    .comment-input
        line-height 21px
        width 100%
        height 2.4rem
        margin-bottom 15px
        padding 10px 15px
        -webkit-user-select text
        border 1px solid rgba(0,0,0,.2);
        border-radius 3px
        outline 0
        background-color #fff;
        -webkit-appearance none 
        color #000
    .comments-cell 
        margin-top .1rem
        .comments-user
            font-size .24rem
            font-weight bold
            color #000
            background #c8c7cc
            line-height .6rem
            padding-left .1rem
            margin-bottom .05rem
        .comments-info
            text-indent .4rem 
            line-height .5rem
            font-size .3rem 
            color #333  

</style>