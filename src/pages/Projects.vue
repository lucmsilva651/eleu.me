<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);
const loading = ref(true);
const error = ref(null);

async function getProjects() {
  const url = "https://api.github.com/users/lucmsilva651/repos";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching projects:", err);
    error.value = "Failed to load projects.";
    return [];
  }
}

function getSortedProjects(projects) {
  return projects
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 16);
}

onMounted(async () => {
  const data = await getProjects();
  projects.value = getSortedProjects(data);
  loading.value = false;
});
</script>

<template>
  <section id="projects">
    <h1>My projects</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else class="project-grid">
      <li v-for="project in projects" :key="project.id">
        <a :href="project.html_url" target="_blank">
          <p class="name">{{ project.name }}</p>
          <p>⭐ {{ project.stargazers_count }}</p>
          <p class="description">
            {{ project.description || "No description provided" }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.project-grid li {
  border: 1px solid #24242e;
  background-color: #2a2a35;
  border-radius: 8px;
  padding: 15px 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-grid li:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.project-grid a {
  text-decoration: none;
  color: #fff;
}

.name {
  font-weight: 600;
  font-size: 1.1rem;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  white-space: normal;
  font-size: 13px;
  color: #aaa;
}
</style>
