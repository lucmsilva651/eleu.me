<script setup lang="ts">
import HomeItem from './HomeItem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <HomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-book" />
    </template>
    <template #heading>Who am I?</template>

    I'm Brazilian, I'm 14 years old and I'm always curious about new things to explore in the world of programming.
  </HomeItem>

  <HomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-cube" />
    </template>
    <template #heading>What do I do?</template>

    I create websites, scripts, digital art and a few other things.
  </HomeItem>

  <HomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-toolbox" />
    </template>
    <template #heading>What can I work with?</template>

    <a href="https://vuejs.org/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-vuejs" /> Vue
    </a>
    
    <a href="https://www.w3.org/html/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-html5" /> HTML
    </a>
    
    <a href="https://www.w3.org/css/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-css3" /> CSS
    </a>

    <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-js" /> JavaScript
    </a>
    
    <a href="https://en.wikipedia.org/wiki/Batch_file" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-solid fa-terminal" /> Batchfile
    </a>

    <a href="https://www.python.org/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-python" /> Python
    </a>
    
    <a href="https://gdevelop.io/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-solid fa-g" /> GDevelop
    </a>
    
    <a href="https://git-scm.com/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-git-alt" /> Git
    </a>
  </HomeItem>

  <HomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-message" />
    </template>
    <template #heading>My social media</template>

    <a href="https://github.com/lucmsilva651/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-github" /> GitHub
    </a>
    
    <a href="https://t.me/itztwilightz/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-telegram" /> Telegram
    </a>

    <a href="https://steamcommunity.com/id/lucmsilva/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-steam" /> Steam
    </a>

    <a href="https://twitter.com/lucmsilvagg/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter
    </a>

    <a href="https://last.fm/user/lucmsilva/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-lastfm" /> Last.fm
    </a>

    <a href="https://youtube.com/lucmsilva651/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-youtube" /> YouTube
    </a>

    <a href="https://facebook.com/lucmsilva/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
    </a>

    <a href="https://tiktok.com/@lucmsilva/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-tiktok" /> TikTok
    </a>

    <a href="https://instagram.com/lucasgabm95/" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
    </a>
  </HomeItem>

  <HomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-heart" />
    </template>
    <template #heading>Support me!</template>
    
    Rate my work and
    <a href="https://buymeacoffee.com/lucmsilva" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-solid fa-circle-dollar-to-slot" /> Buy Me a Coffee
    </a>
    !
  </HomeItem>
</template>
