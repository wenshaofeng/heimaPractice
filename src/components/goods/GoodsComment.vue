<template>

  <div> 
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
</style>