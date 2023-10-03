<!-- src/components/AppHeader.vue -->
<template>
  <header class="main-header">
    <div class="header-container">
      <div class="branding">
        <h1 class="branding-text">{{ title }}</h1>
      </div>
      <nav class="navigation-menu">
        <router-link to="/Aboutme" class="navigation-item">About Me</router-link>
        <router-link to="/Projects" class="navigation-item">My Projects</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
/* ...your styles... */
</style>