<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <div class="about">
    <WelcomeItem>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-face-smile" />
      </template>
      <template #heading>About this website</template>

      This website is made with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <br>
      Hosted and tested on
      <a href="https://www.vercel.com" target="_blank" rel="noopener">Vercel</a>.
      <br>
      Profile picture by
      <a href="https://gleicecomms.carrd.co/" target="_blank" rel="noopener">Gleicinha Arts</a>
    </WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
