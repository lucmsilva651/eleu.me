<script setup lang="ts">
import HomeItem from '../components/HomeItem.vue'
</script>

<template>
  <div class="about">
    <HomeItem>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-face-smile" />
      </template>
      <template #heading>About this website</template>

      This website is made with
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <br>
      Hosted on
      <a href="https://www.vercel.com/" target="_blank" rel="noopener">Vercel</a>.
      <br>
      Icons by
      <a href="https://fontawesome.com/" target="_blank" rel="noopener">FontAwesome</a>.
      <br>
      Profile picture by
      <a href="https://gleicecomms.carrd.co/" target="_blank" rel="noopener">Gleicinha Arts</a>.
      <br>
      DDoS protection, mailing, security and optimization by
      <a href="https://www.cloudflare.com" target="_blank" rel="noopener">Cloudflare</a>.
      *.evs.net.br domain by
      <a href="https://freedns.afraid.org" target="_blank" rel="noopener">FreeDNS</a>.
    </HomeItem>
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
