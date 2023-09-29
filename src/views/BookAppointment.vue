<template>
    <div class="book-appointment">
      <appointment-form />
    </div>
    <nav>
      <router-link to="/rent">Rent a Car</router-link>
      <router-link to="/appointment">Book an Appointment</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </nav>
  </template>
  
  <script>
  import AppointmentForm from '../views/AppointmentForm.vue';
  
  export default {
    name: 'BookAppointment',
    components: {
      AppointmentForm,
    },
  };
  </script>
  
  <style scoped>
  .book-appointment {
    text-align: center;
    padding: 20px;
  }
  nav {
  margin-top: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  font-size: 18px;
  color: #007BFF;
  transition: color 0.3s;
}

nav a:hover {
  color: #0056b3;
}
  </style>
  