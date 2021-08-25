import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/buscar",
    name: "Buscar",
    component: () => import("../views/Buscar.vue")
  },
  {
    path: "/funcionarios",
    name: "Fruncionarios",
    component: () => import("../views/Funcionarios.vue")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
