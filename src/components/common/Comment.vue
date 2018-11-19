<template>

  <div class="Comments-container"> 
      <h1 class="comment-title">发表评论</h1>
      <hr>

      <textarea class="comment-input"  placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" >

      </textarea>

      <mt-button size="large" type="primary">发表评论</mt-button>

      <div class="comments-info">  
          
      </div>

      <mt-button size="large" type="danger" plain>加载更多</mt-button>
  </div>

</template>

<script>
export default {
  name:'Comment',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
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
</style>