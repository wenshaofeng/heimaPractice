<template>

  <div class="num-box"> 
        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='100'>
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" />
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
  </div>

</template>

<script>
export default {
  name:'numbox',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="stylus"  scoped>
.num-box
    display inline
    margin-left .2rem
</style>