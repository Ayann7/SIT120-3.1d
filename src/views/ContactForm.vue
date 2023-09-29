<template>
    <form class="contact-form">
      <h2>Contact Us</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="subject" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" rows="5" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    text-align: center;
    padding: 20px;
  }
  
  h2 {
    font-size: 24px;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button[type="submit"] {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  </style>
  