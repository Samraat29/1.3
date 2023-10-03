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
          title: 'Project 1',
          description: 'Description of project 1.',
          link: 'https://example.com/project1'
        },
        {
          title: 'Project 2',
          description: 'Description of project 2.',
          link: 'https://example.com/project2'
        },
        {
          title: 'Project 3',
          description: 'Description of project 3.',
          link: 'https://example.com/project3'
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
