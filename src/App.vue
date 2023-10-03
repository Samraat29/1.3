<!-- src/App.vue -->
<template>
  <div id="app">
    <AppHeader :title="title" />
    <router-view />
    <AppFooter :email="email" :phone="phone" :linkedin="linkedin" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      title: "SIT120 Introduction to Responsive Web Apps",
      email: "samraat@gmail.com",
      phone: "+61 4 1278 1376",
      linkedin: "linkedin.com/in/samraat-bharanger"
    };
  },
};
</script>

