import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClientSignUp from '../views/ClientSignUp.vue'
import ClientLogIn from '../views/ClientLogIn.vue'
import ClientDashBoard from '../views/ClientDashBoard.vue'
import SignUpRestaurant from '../views/SignUpRestaurant.vue'
import RestLogin from '../views/RestLogin.vue'
import UpdateClient from '../views/UpdateClient.vue'
import RestUpdate from '../views/RestUpdate.vue'
import RestGetMenu from '../views/RestGetMenu.vue'
import ClientGetMenu from '../views/ClientGetMenu.vue'
import UpdateResMenu from '../views/UpdateResMenu.vue'
import GetClientOrder from '../views/GetClientOrder.vue'
import RestaurantOrder from '../views/RestaurantOrder.vue'
import AllItems from '@/views/AllItems.vue'
import GetRestaurant from '@/views/GetRestaurant.vue'
import CartPage from '@/views/CartPage.vue'
import CheckOutPage from '@/views/CheckOutPage.vue'



Vue.use(VueRouter)
const routes = [
 

  {   
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/signup',
    name: 'ClientSignUp',
    component:ClientSignUp
  },

  {
    path: '/login',
    name: 'ClientLogIn',
    component: ClientLogIn
  },

  {
    path: '/restsignup',
    name: 'SignUpRestaurant',
    component: SignUpRestaurant
  },

  {
    path: '/restlogin',
    name: 'RestLogin',
    component:RestLogin
  },

  

  {
    path: '/updateclient',
    name: 'UpdateClient',
    component: UpdateClient
  },

  {
    path: '/updaterestaurant',
    name: 'RestUpdate',
    component: RestUpdate
  },
  

  {
    path: 'restaurant/menu',
    name: 'RestGetMenu',
    component: RestGetMenu
  },

  {
    path: '/restaurant',
    name: 'GetRestaurant',
    component: GetRestaurant
  },

  {
    path: '/client/menu/:restaurant_id',
    name: ' ClientGetMenu',
    component: ClientGetMenu
  },


  {
    path: '/updatemenu',
    name: 'UpdateResMenu',
    component: UpdateResMenu
  },


  {
    path: '/order',
    name: 'GetClientOrder',
    component: GetClientOrder
  },

  {
    path: '/restorder',
    name: 'RestaurantOrder',
    component: RestaurantOrder
  },

  {
    path: '/cart',
    name: 'CartPage.vue',
    component: CartPage
  },

  {
    path: '/checkout',
    name: 'CheckOutPage.vue',
    component: CheckOutPage
  },


  {
    path: '/allitems',
    name: 'AllItems',
    component: AllItems
  },

  


  {
    path: '/dashboard',
    name: 'ClientDashBoard',
    component: ClientDashBoard
  },

  


  
 


   

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
