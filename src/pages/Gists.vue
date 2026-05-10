<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

const gists = ref([]);
const loading = ref(true);
const error = ref(null);

async function getgists() {
  const url = "https://api.github.com/users/lucmsilva651/gists";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching gists:", err);
    error.value = err;
    return [];
  }
}

function getSortedgists(gists) {
  return gists
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 16);
}

onMounted(async () => {
  const data = await getgists();
  gists.value = getSortedgists(data);
  loading.value = false;
});
</script>

<template>
  <section id="gists">
    <h1>My gists</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else class="gist-grid">
      <li v-for="gist in gists" :key="gist.id">
        <a :href="gist.html_url" target="_blank">
          <p class="name">{{ gist.description }}</p>
          <div class="repo-stats">
            <p><Icon icon="tdesign:time" /> {{ new Date(gist.created_at).toLocaleDateString() }}</p>
            <p><Icon icon="tdesign:chat" /> {{ gist.comments }}</p>
          </div>
          <p class="description">
            {{ gist.description || "No description provided" }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.gist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.gist-grid li {
  border: 1px solid var(--color-border-soft);
  background-color: var(--color-bg-card);
  border-radius: 8px;
  padding: 15px 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.gist-grid li:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.gist-grid a {
  text-decoration: none;
  color: var(--color-text-primary);
}

.name {
  font-weight: 600;
  /* font-size: 1.1rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  white-space: normal;
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
