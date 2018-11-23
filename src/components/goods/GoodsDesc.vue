<template>

    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>

        <hr>

        <div class="content" v-html="info.content"></div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
  name:'GoodsDesc',
  components:{},
  props:{},
  data(){
    return {
        info : {},
        id : this.$route.params.id
    }
  },
  methods:{
      getGoodsDesc() {
        axios
        .get("api/b/goods/getdesc/" + this.id )
        .then(result => {
          if (result.data.status === 0) {
            this.info = result.data.message[0]
          }
        });
    }

  },
  created(){
      this.getGoodsDesc()
  }
}
</script>
<style lang="stylus" scoped>
.content >>> p
    color #888 
    font-size .28rem
    margin .15rem .1rem
    line-height .5rem
.content >>> img
    width 100%
    padding .15rem .1rem       
.goodsdesc-container
    background #fff
.goodsdesc-container h3 
    color #226aff
    font-size .36rem
    padding .4rem .12rem
    text-align center
    font-weight bold 
   
     
</style>