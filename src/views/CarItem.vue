<template>
    <div class="car-item">
      <img :src="car.image" :alt="car.title" />
      <h2>{{ car.title }}</h2>
      <p>{{ car.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      car: Object,
    },
  };
  </script>
  
  <style scoped>
  .car-item {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
  }
  
  .car-item img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 24px;
    margin: 0;
  }
  
  p {
    font-size: 16px;
  }
  </style>
  