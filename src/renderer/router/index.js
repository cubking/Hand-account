import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: require('@/components/IndexPage').default
    },
    {
      path: '/add',
      name: 'add-page',
      component: require('@/components/AddPage').default
    },
    {
      path: '/detail',
      name: 'detail-page',
      component: require('@/components/DetailPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
