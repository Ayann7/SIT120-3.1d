<template>
  <div class="home">
    <div class="header">
      <div class="animation-container">
      <h1>Welcome to Cheap Car Rentals</h1>
    </div>
    <div class="animation-container">
      <p>Your trusted partner for affordable and reliable car rentals.</p></div>
      <img src="contact.jpeg" alt="Cheap Car Rentals Logo" class="responsive-image" /><p></p>
      <iframe
        width="100%" height="300"
        src="https://www.youtube.com/embed/kIyILpyVWzU"
        title="Car Rental Promotional Video Advertising"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/OJtiKd4vGipe6hPVpNdww"
        width="60%"
        style="height: 70%; min-height: 700px"
        frameborder="0"
></iframe>

    </div>
    <nav>
      <Transition name="fade"><router-link to="/rent">Rent a Car</router-link></Transition>
      <Transition name="fade"><router-link to="/appointment">Book an Appointment</router-link></Transition>
      <Transition name="fade"><router-link to="/contact">Contact Us</router-link></Transition>
    
    </nav>
    <div class="svg-illustration">
      <img src="../assets/SimpleSVG.svg" alt="Simple SVG Illustration" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.header {
  background-color: #007BFF;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.logo {
  max-width: 100px;
  margin-bottom: 20px;
}

h1 {
  font-size: 36px;
  margin: 0;
  padding-top: 10px;
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
.header p {
  font-size: 18px;
  margin-top: 10px;
  color: #fff;
}
.svg-illustration {
  text-align: center;
  margin-top: 20px;
}

.svg-illustration img {
  max-width: 100%;
  height: auto;
}
.responsive-image {
  max-width: 100%;
  height: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animation-container {
  animation: slideIn 1s ease-in-out; /* Adjust the animation duration as needed */
}
</style>
