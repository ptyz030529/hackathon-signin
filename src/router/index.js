import Vue from 'vue'
import Router from 'vue-router'

import PageComplete from '@/pages/Complete'
import PageSuccess from '@/pages/Success'
import PageSignIn from '@/pages/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: PageSignIn
    },
    {
      path: '/success',
      name: 'success',
      component: PageSuccess
    },
    {
      path: '/complete',
      name: 'complete',
      component: PageComplete
    },
  ]
})
