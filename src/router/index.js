import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/contents/Main'
import Member from '@/components/contents/Member'
import Search from '@/components/contents/Search'
import Shop from '@/components/contents/Shop'

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
        }

      ]
    }
    
  ],
  linkActiveClass: 'mui-active'
})
