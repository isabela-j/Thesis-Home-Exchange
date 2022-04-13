import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import AddOfferView from '../views/AddOfferView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/announce',
      name: 'annnounce',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AnnounceView.vue')
    },
    { 
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        hideNavbar: true,
       }
    },
    { 
      path: '/signup',
      name: 'signup',
      component: SignupView,
      meta: {
        hideNavbar: true,
       }
    },
    {
      path: '/addoffer',
      name: 'addoffer',
      component: AddOfferView, 
    }
  ]
})

export default router
