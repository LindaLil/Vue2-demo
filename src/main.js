// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Vueaxios from 'vue-axios'
import store from './store'
import {common} from './assets/css/common.css'
import InfiniteScroll from 'vue-infinite-scroll' //无限滚动加载vue-infinite-scroll
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = true
Vue.use(Vueaxios,Axios)
Vue.use(InfiniteScroll)
Vue.use(VueLazyload,{
	preLoad:1.3, //预加载的宽高比，默认1.3
	error:require('@/assets/images/404.png'),//图片加载失败时使用的图片源
	loading:require('@/assets/images/loading.gif'),//图片加载的路径
	attempt:1 //尝试加载次数
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
