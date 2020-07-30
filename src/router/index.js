import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
    {
      path: '//',
      component: () => import('../components/common/index.vue'),
      meta: {
        title: '自述文件'
      },
      children:[{
        path:'/index',
        component: () => import('../views/Index.vue'),
        meta:{
          title:'首页'
        }
      },
        {
          path:'/memberManagement',
          component: () => import('../views/memberManagement.vue'),
          meta:{
            title:'会员管理'
          }
        },
        {
          path:'/allOrder',
          component: () => import('../views/allOrder.vue'),
          meta:{
            title:'全部订单'
          }
        }]
    },
    {
      path: '/login',
      component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue'),
      meta: {
        title: '登录'
      }
    }
]

const router = new VueRouter({
  routes
})

export default router
