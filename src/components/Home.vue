<template>

    <div class="container"> 
        <!-- 顶部 Header 区域 -->
         <mt-header   fixed title="练手Vue项目">
              <div v-show="this.show" @click="goback" slot="left">
                 <mt-button  icon="back">返回 </mt-button>
              </div>
         </mt-header>
            <div  class="contents">
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
                show:false
            }
         },
         components : {
            HomeFoot
         },
         methods :{
             goback () {
                
                 this.$router.go(-1)
             }

         },
         watch: {
              '$route.path':function(newV , oldV ){
                  if (newV !=="/Main" ){
                      this.show = true 
                  }
                  else {
                      this.show = false
                  }
              }
         },
         created() {
              this.show = this.$route.path === "/Main" ? false : true
         },            
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
    .mint-header
        z-index 4
                        

</style>