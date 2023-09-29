<template>
    <div class="contact-us">
      <contact-form />
    </div>
    <nav>
      <router-link to="/rent">Rent a Car</router-link>
      <router-link to="/appointment">Book an Appointment</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </nav>
  </template>
  
  <script>
  import ContactForm from '../views/ContactForm.vue';
  
  export default {
    name: 'ContactUs',
    components: {
      ContactForm,
    },
  };
  </script>
  
  <style scoped>
  .contact-us {
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
  