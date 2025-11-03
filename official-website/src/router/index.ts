import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import IndexPage from '../views/index-page/IndexPage.vue'

const routes = [
  { path: '/', name: 'Index', component: IndexPage },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
