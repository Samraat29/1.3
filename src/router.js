// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/Aboutme.vue';
import Projects from './components/Projects.vue';  // Ensure the file name is Projects.vue

const routes = [
  { path: '/Aboutme', component: AboutPage },
  { path: '/Projects', component: Projects },  // Updated path to match component name
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;