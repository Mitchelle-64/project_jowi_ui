import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import ShipperDashboardView from '../views/ShipperDashboardView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
    
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  }, 

  {
    path: '/shipper/dashboard',
    name: 'shipper-dashboard',
    component: ShipperDashboardView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router 


