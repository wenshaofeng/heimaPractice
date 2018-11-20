<template>

    <div class="container"> 
        <!-- 顶部 Header 区域 -->
         <mt-header fixed title="练手Vue项目">
              <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
              </router-link>
         </mt-header>
            <div class="contents">
                <transition>
                    <router-view ></router-view>
                </transition>      
             </div> 



         <home-foot></home-foot>

    </div>

</template>

<script>
    import HomeFoot from './HomeFoot.vue'
    export default {
        name:'Home',
         data(){
            return {
         
            }
         },
         components : {
            HomeFoot
         },
         mounted() {
             
         }

        
  }
      

</script>
<style lang='stylus' scoped>
    .contents
        padding-top .8rem
        padding-bottom 1rem
        overflow-x hidden  //防止顶部滚动
        height 100%
    .v-enter
        opacity: 0;
        transform : translateX(100%)   //右边进左边出
    .v-leave-to
        opacity: 0;
        transform : translateX(-100%)  
        position absolute           //内容部分平滑进入 
    .v-enter-active,.v-leave-active
        transition: all 0.5s

        
          
          


</style>