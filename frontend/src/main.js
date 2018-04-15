import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/index'
import App from './App'
import { appRouter } from './router/index'
import './font-awesome/css/font-awesome.min.css'

Vue.use(Vuex)
Vue.use(VueRouter)

const RouterConfig = {
  routes: appRouter
}

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach((to) => {
  let title = ''
  if (to.meta && to.meta.title) {
    title = to.meta.title
  }
  store.commit('setHeaderTitle', title)
  // setTimeout(() => {
    store.commit('updateLoadingStatus', {isLoading: false})
  // }, 500)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
