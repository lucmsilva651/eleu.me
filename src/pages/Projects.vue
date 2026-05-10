<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

const projects = ref([]);
const loading = ref(true);
const error = ref(null);

async function getProjects() {
  const url = "https://api.github.com/search/repositories?q=user:lucmsilva651&sort=stars&order=desc&per_page=16";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data?.items)) throw new Error("Unexpected API response format");
    return data.items;
  } catch (err) {
    console.error("Error fetching projects:", err);
    error.value = err;
    return [];
  }
}

onMounted(async () => {
  projects.value = await getProjects();
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
          <div class="repo-stats">
            <p><Icon icon="tdesign:star" /> {{ project.stargazers_count }}</p>
            <p><Icon icon="tdesign:fork" /> {{ project.forks_count }}</p>
          </div>
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
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.project-grid li {
  border: 1px solid var(--color-border-soft);
  background-color: var(--color-bg-card);
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
  color: var(--color-text-primary);
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
  color: var(--color-text-muted);
}

.repo-stats,
.repo-stats * {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.repo-stats {
  gap: 0.8rem;
}

.repo-stats * {
  gap: 0.4rem;
}
</style>
