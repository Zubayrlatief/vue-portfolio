import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/MyAbout',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../components/MyAbout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
