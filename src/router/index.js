import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/contents/Main'
import Member from '@/components/contents/Member'
import Search from '@/components/contents/Search'
import Shop from '@/components/contents/Shop'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import Pictures from '@/components/Pictures/Pictures'
import PicturesInfo from '@/components/Pictures/PicturesInfo'
import Goods from '@/components/goods/GoodsList'
import GoodsInfo from '@/components/goods/GoodsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Main'
    },
    { 
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        { 
          path: 'Main',
          name: 'Main',
          component: Main
        },
        {
          path: 'Member',
          name: 'Member',
          component: Member
        },
        {
          path: 'Search',
          name: 'Search',
          component: Search
        },
        {
          path: 'Shop',
          name: 'Shop',
          component: Shop
        },
        {
          path:'Main/NewsList',
          name:'NewsList',
          component:NewsList
        },
        {
          path:'Main/NewsList/NewsInfo/:id',
          name:'NewsInfo',
          component:NewsInfo
        },
        {
          path:'Main/Pictures',
          name:'Pictures',
          component:Pictures
        },
        {
          path:'Main/Pictures/Info/:id',
          name:'PictureInfo',
          component:PicturesInfo
        },
        {
          path:'Main/Goods',
          name:'Goods',
          component:Goods
        },
        {
          path:'Main/Goods/GoodsInfo/:id',
          name:'GoodsInfo',
          component : GoodsInfo

        }
  
  
      ]
    }
    
  ],
  linkActiveClass: 'mui-active'   ,
  scrollBehavior(to , from ,savedPosition){
    return {x:0 ,y:0}
  }                  
})
