<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-book" />
    </template>
    <template #heading>Who I am?</template>

    I'm Brazilian, I'm 14 years old and I'm always curious about new things to explore in the world of programming. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-cube" />
    </template>
    <template #heading>What I do?</template>

    I make websites, shell scripts, digital art and some other things.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-toolbox" />
    </template>
    <template #heading>My projects</template>

    I will leave all of my projects in my GitHub account:
    <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-github" /> GitHub
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-message" />
    </template>
    <template #heading>Social media</template>

    <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-github" /> GitHub
    </a>

    <a href="https://youtube.com/lucmsilva651" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-youtube" /> YouTube
    </a>

    <a href="https://facebook.com/lucmsilva" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
    </a>

    <a href="https://tiktok.com/@lucmsilva" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-tiktok" /> TikTok
    </a>

    <a href="https://instagram.com/lucasgabm95" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-heart" />
    </template>
    <template #heading>Support me</template>

    Support me following my social media and rating my work.
  </WelcomeItem>
</template>
