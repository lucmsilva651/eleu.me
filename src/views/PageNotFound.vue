<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <div class="notfound">
    <WelcomeItem>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-face-tired" />
      </template>
      <template #heading>404 Not Found</template>
      
      Whoops, it seems that this page was not found!
      
      You can try:
      <RouterLink to="/">Go to Home</RouterLink>
    </WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .notfound {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>