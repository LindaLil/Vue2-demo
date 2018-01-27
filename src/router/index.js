import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/menu/menu'
import Welfare from '../pages/welfare/welfare'
import Android from '../pages/android/android'
import IOS from '../pages/ios/ios'
import Web from '../pages/web/web'
import Recommend from '../pages/recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Welfare',
        component: Welfare
    },
    {
      path:'/welfare',
      name:'Welfare',
      component:Welfare
    },
    {
      path:'/android',
      name:'Android',
      component:Android
    },
    {
      path:'/ios',
      name:'IOS',
      component:IOS
    },
    {
      path:'/web',
      name:'Web',
      component:Web
    },
    {
      path:'/recommend',
      name:'Recommend',
      component:Recommend
    }
  ]
})
