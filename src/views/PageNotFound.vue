<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #heading>404 Not Found</template>
    Whoops, it seems that this page was not found!
    You can try:
    <RouterLink to="/">Go to Home</RouterLink>
  </WelcomeItem>
</template>