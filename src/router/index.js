import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)
const Data = ()=>import('@/views/data/Data')
const BasicData = ()=>import('@/views/data/BasicData')
const User = ()=>import('@/views/data/User')
const Page = ()=>import('@/views/data/Page')

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    redirect:'/data'
  },{
    path: '/data',
    name: 'Data',
    component: Data,
    redirect:'/basicData',
    children:[
      {
        path: '/basicData',
        name:'BasicData',
        component: BasicData
      },
      {
        path: '/user',
        name:'User',
        component: User
      },
      {
        path: '/page',
        name:'Page',
        component: Page
      }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
