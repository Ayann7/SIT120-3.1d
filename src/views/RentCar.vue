<template>
    <div class="rent-car">
      <h1>Available Cars for Rent</h1>
      <div class="car-list">
        <car-item v-for="(car, index) in cars" :key="index" :car="car" />
      </div>
    </div>
    <nav>
      <router-link to="/rent">Rent a Car</router-link>
      <router-link to="/appointment">Book an Appointment</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </nav>
  </template>
  
  <script>
  import CarItem from '../views/CarItem.vue';
  
  export default {
    name: 'RentCar',
    components: {
      CarItem,
    },
    data() {
      return {
        cars: [
          {
            title: 'Rolls Royce Ghost',
            description: 'The Rolls-Royce Ghost is a full-sized luxury car manufactured by Rolls-Royce Motor Cars. The "Ghost" nameplate, named in honour of the Silver Ghost, a car first produced in 1906, was announced in April 2009 at the Auto Shanghai show.',
            image: 'RollsRoyceGhost.jpeg',
          },
          {
            title: 'Lamborghini Aventador',
            description: 'The Lamborghini Aventador (Spanish pronunciation: [aβentaˈðoɾ]) is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a Spanish fighting bull that fought in Zaragoza, Aragón, in 1993.The Aventador is the successor to the Murciélago and was made by hand in Sant Agata Bolognese, Italy.',
            image: 'lambo.jpeg',
          },
          {
            title: 'Ferrari Enzo',
            description: 'The Ferrari Enzo (Type F140), also marketed as Enzo Ferrari, is a mid-engine sports car manufactured by Italian automobile manufacturer Ferrari and named after the companys founder, Enzo Ferrari.[6] It was developed in 2002 using Formula One technology, such as a carbon-fibre body, F1-style automated-shift manual transmission, and carbon fibre-reinforced silicon carbide (C/SiC) ceramic composite disc brakes, as well as technologies not allowed in F1, such as active aerodynamics.',
            image: 'Ferrari.avif',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .rent-car {
    text-align: center;
    padding: 20px;
  }
  
  .car-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
  