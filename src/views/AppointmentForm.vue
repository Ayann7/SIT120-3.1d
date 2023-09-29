<template>
    <form class="appointment-form">
      <h2>Book an Appointment with Us</h2>
      <img src="carappointment.jpeg" alt="Appointment Image" class="appointment-image" />
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>
      <div class="form-group">
        <label for="appointment-time">Appointment Time:</label>
        <input type="datetime-local" id="appointment-time" v-model="appointmentTime" required />
      </div>
      <button type="submit">Submit</button>
    </form>
    <h1>Or Come to our store directly!</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25104.85477820525!2d144.33417943347325!3d-38.137708439098134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad416a92e48384d%3A0x724f4af4c23ab488!2sHertz%20Car%20Rental!5e0!3m2!1sen!2sau!4v1695963332639!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        phone: '',
        appointmentTime: '',
      };
    },
  };
  </script>
  
  <style scoped>
  .appointment-form {
    text-align: center;
    padding: 20px;
  }
  
  h2 {
    font-size: 24px;
  }
  
  .appointment-image {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="datetime-local"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  