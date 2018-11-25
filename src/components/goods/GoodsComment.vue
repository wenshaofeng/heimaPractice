<template>

  <div class='GoodsComments_container'> 
      <comment-box :id='id'></comment-box>

  </div>

</template>

<script>
import CommentBox from '@/components/common/Comment'
export default {
  name:'GoodsComment',
  components:{CommentBox},
  props:{},
  data(){
    return {
      id : this.$route.params.id
    }
  }
 
}
</script>
<style lang="stylus"  scoped>
.GoodsComments_container
  background #fff
</style>