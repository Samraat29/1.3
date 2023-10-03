<!-- src/components/AppFooter.vue -->
<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="info-section">
        <div class="info-item">
          <a :href="'mailto:' + email" class="info-link">
            <i class="far fa-envelope info-icon"></i>
            {{ email }}
          </a>
        </div>
        <div class="info-item">
          <a :href="'tel:' + phone" class="info-link">
            <i class="fas fa-phone-alt info-icon"></i>
            {{ phone }}
          </a>
        </div>
        <div class="info-item">
          <a :href="'https://' + linkedin" target="_blank" class="info-link">
            <i class="fab fa-linkedin-in info-icon"></i>
            LinkedIn Profile
          </a>
        </div>
      </div>
      <div class="media-icons">
        <!-- ...social media icons... -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    email: String,
    phone: String,
    linkedin: String
  }
};
</script>

<style scoped>
/* ...your styles... */
</style>