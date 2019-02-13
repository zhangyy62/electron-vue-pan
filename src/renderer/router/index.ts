import Vue from 'vue'
import Router from 'vue-router'
import LandindPage from '@/components/LandingPage.vue'
import vBigIconList from '@/basic/v-bigIconList/v-bigIconList.vue'
import vTable from '@/basic/v-table/v-table.vue'
import floatingWindow from '@/components/floatingWindow/floatingWindow.vue'
import downloadDemo from '@/components/downloadDemo/downloadDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      redirect: '/table',
      component: LandindPage,
      children : [
        {
          path: '/table',
          name: 'table',
          component: vBigIconList
        },
        {
          path: '/bar',
          name: 'bar',
          component: vTable
        }
      ]
    },
    {
      path: '/floating/window',
      name: 'floating-window',
      component: floatingWindow
    },
    {
      path: '/downloaddemo',
      name: 'downloaddemo',
      component: downloadDemo
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
