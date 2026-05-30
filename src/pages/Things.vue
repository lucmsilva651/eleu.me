<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';

const apiKey = "25ffd837323c0fc690d0b52687429e75";
const imageBase = 'https://image.tmdb.org/t/p/w500';

const mediaList = [
  { type: 'tv', id: 64414 },
  { type: 'tv', id: 33765 },
  { type: 'tv', id: 60572 },
  { type: 'tv', id: 57243 },
  { type: 'tv', id: 86831 },
  { type: 'tv', id: 61923 },
  { type: 'tv', id: 94954 },
  { type: 'tv', id: 289892 },
];

const items = ref([]);
const loading = ref(true);
const error = ref(null);

async function fetchMedia() {
  try {
    const requests = mediaList.map(item =>
      fetch(
        `https://api.themoviedb.org/3/${item.type}/${item.id}?api_key=${apiKey}`
      ).then(r => r.json())
    );

    items.value = await Promise.all(requests);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

onMounted(fetchMedia);
</script>

<template>
  <section id="media">
    <h1>Things I like</h1>
    <p>Those are some TV shows and movies that I personally like. <i>(URLs may not be updated)</i></p>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error }}</p>

    <ul v-else class="media-grid">
      <li v-for="item in items" :key="item.id">
        <div class="media-card">
          <a :href="item.homepage" target="_blank">
            <img :src="imageBase + item.poster_path" :alt="item.title || item.name"/>
            <p class="name">{{ item.title || item.name }}</p>
            <div class="media-info">
              <p>
                <Icon icon="mdi:clock-outline" />
                {{ item.first_air_date && !isNaN(new Date(item.first_air_date))
                  ? new Date(item.first_air_date).toLocaleDateString()
                  : "Unknown"
                }}
              </p>
              <p><Icon icon="mdi:movie-outline" /> {{ item.number_of_episodes || "Movie" }}</p>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.media-grid {
  display: grid;
  gap: .8rem;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}

.media-grid li {
  border: 1px solid var(--color-border-soft);
  background-color: var(--color-bg-card);
  border-radius: 8px;
  padding: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.media-grid li:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.media-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.media-card img {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--color-border-soft);
}

.name {
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  white-space: normal;
  /* font-size: rem; */
}

.media-info,
.media-info * {
  font-size: small;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.media-info {
  gap: 0.8rem;
}

.media-info * {
  gap: 0.4rem;
}
</style>
