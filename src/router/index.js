import { createRouter, createWebHistory } from 'vue-router';

// import store from '../store/index.js'; //import the store used to track state. 

import jwt_decode from 'jwt-decode';

//views currently routed to
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import ShipperDashboardView from '../views/ShipperDashboardView.vue'
import TransporterDashboardView from '../views/TransporterDashboardView.vue'
import DriverDashboardView from '../views/DriverDashboardView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'
import FourOFourView from '../views/FourOFourView.vue'

//define roles so we can build navigation guards
// Define roles here


const ADMIN_ROLE = 'admin';
const SHIPPER_ROLE = 'shipper';
const DRIVER_ROLE = 'driver';
const TRANSPORTER_ROLE = 'transporter';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { isLoggedIn: false }
  },

  {
    path: '/404',
    name: 'error',
    component: FourOFourView,
    meta: {isLoggedIn: false }
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { isLoggedIn: false}
    
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: { isLoggedIn: false}
  }, 

//shipper routes here 
  {
    path: '/shipper/dashboard',
    name: 'shipper-dashboard',
    component: ShipperDashboardView,
    meta: { isLoggedIn: true,  roles: [ADMIN_ROLE, SHIPPER_ROLE]} //roles required to access this route

  },

  //driver routes here
  {
    path: '/driver/dashboard',
    name: 'driver-dashboard',
    component: DriverDashboardView,
    meta: { isLoggedIn: true, roles: [ADMIN_ROLE, DRIVER_ROLE] } //roles required to access this route

  },

  //admin routes here 
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: AdminDashboardView, 
    meta: { isLoggedIn:true, roles: [ADMIN_ROLE] } //roles required to access this route

  },

  //transporter routes here
  {
    path: '/transporter/dashboard',
    name: 'transporter-dashboard',
    component: TransporterDashboardView,
    meta: { isLoggedIn:true, roles: [ADMIN_ROLE, TRANSPORTER_ROLE] } //roles required to access this route
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



// Define the before each navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const userRole = decodedToken ? decodedToken.role : null;

  // Check if the user is trying to access a route with isLoggedIn: false
  if (!to.meta.isLoggedIn) {
    next();
    return;
  }

  // If there is no valid JWT or userRole, redirect to login
  if (!decodedToken || !userRole) {
    next('/login');
    return;
  }

  // Get the required role for the route from the route's meta property using optional chaining
  const requiredRole = to.meta.roles;

  // Check if the user has the required role to access the route
  if (requiredRole && requiredRole.some((role) => userRole.includes(role))) {
    // If the user has the required role, allow access to the route
    next();
  } else {
    // User does not have the required role, redirect to the '/404' route
    next('/404');
  }
});

export default router;