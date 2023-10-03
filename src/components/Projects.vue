<!-- src/components/Projects.vue -->
<template>
  <div class="projects">
    <h2>My Projects</h2>
    <div class="project-card" v-for="(project, index) in projects" :key="index">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <a :href="project.link" target="_blank" class="project-link">View Project</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Project 1.1',
          description: 'Pass rask 1.1.',
          link: 'https://github.com/Samraat29/DBS-CHARACTERS'
        },
        {
          title: 'Project 1.2',
          description: 'Pass task 1.2.',
          link: 'https://github.com/Samraat29/TASK1.2P'
        },
        {
          title: 'Project 1.3',
          description: 'Pass task 1.3',
          link: 'https://github.com/Samraat29/sit120-1.3p-'
        }
        // Add more project objects as needed
      ]
    };
  }
};
</script>

<style scoped>
.projects {
  padding: 20px;
}

.project-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
