import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import(/* webpackChunkName: "group-foo" */ "@/myPages/Home.vue"),
      meta:{
      	title:"Anglesky的主页"
      }
    },
    {
      path: '/iview-Button',
      name: 'Button',
      component: ()=>import(/* webpackChunkName: "group-foo" */ "@/myPages/iview/Button.vue"),
      meta:{
        title:"Button"
      }
    }
  ]
})
