import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import RentCar from '../views/RentCar.vue';
import BookAppointment from '../views/BookAppointment.vue';
import ContactUs from '../views/ContactUs.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      component: Home
    },
    {
      path: '/rent', 
      component: RentCar
    },
    { 
      path: '/appointment', 
      component: BookAppointment 
    },
    {
      path: '/contact', 
      component: ContactUs 
    },
  ]
})

export default router
