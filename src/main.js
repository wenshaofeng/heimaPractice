// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/lib/mui/css/mui.min.css'
// 导入扩展图标样式
import '@/assets/lib/mui/css/icons-extra.css'
import './assets/lib/style/reset.css'
import './assets/lib/style/border.css'
// 导入格式化时间的插件
import moment from 'moment'

import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
import store from './store/index.js'
import VuePreview from 'vue-preview'


Vue.use(MintUI)
Vue.use(VuePreview)
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
