import Vue from 'vue'
import Router from 'vue-router'
import signUp from '@/components/page/signUp'
import login from '@/components/page/login'
import reset from '@/components/page/reset'
import SMS from '@/components/page/SMS'
import zongxiang from '@/components/page/xinxiguanli/zongxiang'
import Error from '@/components/page/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    }, 
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/SMS',
      name: 'SMS',
      component: SMS,
      children: [
        {
          path:'zongxiang',
          name:'zongxiang',
          component:zongxiang
        }
      ]
    },
    {
      path:'*',
      component:Error
    }
  ]
})
