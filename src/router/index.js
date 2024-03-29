import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import AddOfferView from '../views/AddOfferView.vue'
import SavedOffersView from '../views/SavedOffersView.vue'
import MyOffersView from '../views/MyOffersView.vue'
import SentOffersView from '../views/SentOffersView.vue'
import ReceivedOffersView from '../views/ReceivedOffersView.vue'
import EditProfileView from '../views/EditProfileView.vue'
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
    },
    {
      path: '/savedOffers',
      name: 'savedOffers',
      component: SavedOffersView, 
    },
    {
      path: '/myOffers',
      name: 'myOffers',
      component: MyOffersView, 
    },
    {
      path: '/sentOffers',
      name: 'sentOffers',
      component: SentOffersView, 
    },
    {
      path: '/receivedOffers',
      name: 'receivedOffers',
      component: ReceivedOffersView, 
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: EditProfileView, 
    }
  ]
})

export default router
