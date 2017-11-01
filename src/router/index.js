import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('@/components/Preview') // 路由组件的懒加载
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/pages/errors/404') // 404页面
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/pages/errors/500') // 500页面
    }
    // {
    //   path: '/repository',
    //   name: 'repository',
    //   meta: {
    //       requireAuth: true,
    //   },
    //   component: Repository
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: Login
    // }
  ],
  // 切换新路由时，页面滚到顶部，在按下 后退/前进 按钮时保持原先的滚动位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 拦截需要鉴权的路由，判断是否登录
    // 如果未登录，跳转到登录页
    if (!localStorage.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
