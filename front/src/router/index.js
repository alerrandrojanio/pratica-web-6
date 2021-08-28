import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/postar",
    name:"Postar",
    component: () => import("../views/Postar.vue")
  },
  {
    path: "/mostrar",
    name:"Mostrar",
    component: () => import("../views/Mostrar.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
