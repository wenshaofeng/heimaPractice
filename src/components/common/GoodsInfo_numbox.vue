<template>

  <div class="num-box"> 
        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1'>
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" @change='CountChange'  value="1" ref="numberbox" />
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
  </div>

</template>

<script>
import mui from "../../assets/lib/mui/js/mui.min.js"
export default {
  name:'numbox',
  components:{},
  props:['max'],
  methods:{
    CountChange () {
      this.$emit("getCount",parseInt(this.$refs.numberbox.value))
    }
  },
  watch: {
    max : function (newVal, oldVal) {
        mui('.mui-numbox')
        .numbox()
        .setOption('max',newVal)
    }        
  },
  data () {
    return {
    }
  },
  created(){},
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
    
  }
}
</script>
<style lang="stylus"  scoped>
.num-box
    display inline
    margin-left .2rem
</style>