<script setup lang="ts">
import HomeItem from './HomeItem.vue'
</script>

<template>
  <HomeItem>
    <template #icon>
      <v-icon name="ri-book-mark-fill" />
    </template>
    <template #heading>Who am I?</template>

    I'm Brazilian, I'm 14 years old and I'm always curious about new things to explore in the world of programming.
  </HomeItem>

  <HomeItem>
    <template #icon>
      <v-icon name="fa-cube" />
    </template>
    <template #heading>What do I do?</template>

    I create websites, scripts, compilations and a few other things.
  </HomeItem>

  <HomeItem>
    <template #icon>
      <v-icon name="fa-toolbox" />
    </template>
    <template #heading>What do I know how to work with?</template>

    <a href="https://vuejs.org/" target="_blank" rel="noopener">
      <v-icon name="fa-vuejs" /> Vue
    </a>
    
    <a href="https://www.w3.org/html/" target="_blank" rel="noopener">
      <v-icon name="co-html5-shield" /> HTML
    </a>
    
    <a href="https://www.w3.org/css/" target="_blank" rel="noopener">
      <v-icon name="co-css3-shiled" /> CSS
    </a>

    <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener">
      <v-icon name="si-javascript" /> JavaScript
    </a>

    <a href="https://www.python.org/" target="_blank" rel="noopener">
      <v-icon name="la-python" />  Python
    </a>
    
    <a href="https://wikipedia.org/wiki/Batch_file" target="_blank" rel="noopener">
      <v-icon name="hi-solid-terminal" /> Batchfile
    </a>

    <a href="https://nodejs.org/" target="_blank" rel="noopener">
      <v-icon name="fa-node" /> Node.js
    </a>
    
    <a href="https://en.wikipedia.org/wiki/Assembly_language" target="_blank" rel="noopener">
      <v-icon name="si-assemblyscript" /> Assembly (x86)
    </a>

    <a href="https://gamemaker.io/" target="_blank" rel="noopener">
      <v-icon name="vi-file-type-light-gamemaker2" /> GameMaker
    </a>

    <a href="http://microsoft.com/microsoft-365/excel" target="_blank" rel="noopener">
      <v-icon name="ri-file-excel-2-fill" /> Excel
    </a>

    <a href="https://blogger.com" target="_blank" rel="noopener">
      <v-icon name="fa-blogger" /> Blogger
    </a>
    
    <a href="https://git-scm.com/" target="_blank" rel="noopener">
      <v-icon name="si-git" /> Git
    </a>

    <a href="https://www.npmjs.com/" target="_blank" rel="noopener">
      <v-icon name="ri-npmjs-fill" /> npm
    </a>
  </HomeItem>

  <HomeItem>
    <template #icon>
      <v-icon name="ri-message-fill" />
    </template>
    <template #heading>My social media</template>

    <a href="https://github.com/lucmsilva651/" target="_blank" rel="noopener">
      <v-icon name="fa-github" /> GitHub
    </a>

    <a href="https://youtube.com/lucmsilva651/" target="_blank" rel="noopener">
      <v-icon name="si-youtube" /> YouTube
    </a>

    <a href="https://last.fm/user/lucmsilva" target="_blank" rel="noopener">
      <v-icon name="fa-lastfm-square" /> Last.fm
    </a>

    <a href="https://steamcommunity.com/id/lucmsilva/" target="_blank" rel="noopener">
      <v-icon name="fa-steam-square" /> Steam
    </a>

    <a href="https://lucmsilva.itch.io/" target="_blank" rel="noopener">
      <v-icon name="fa-itch-io" /> Itch.io
    </a>

    <a href="https://tiktok.com/@lucmsilva/" target="_blank" rel="noopener">
      <v-icon name="co-tiktok" /> TikTok
    </a>

    <a href="https://twitter.com/lucmsilvagg/" target="_blank" rel="noopener">
      <v-icon name="co-twitter" /> Twitter
    </a>

    <a href="https://facebook.com/lucmsilva/" target="_blank" rel="noopener">
      <v-icon name="co-facebook" /> Facebook
    </a>

    <a href="https://instagram.com/lucasgabm95/" target="_blank" rel="noopener">
      <v-icon name="co-instagram" /> Instagram
    </a>
  </HomeItem>

  <HomeItem>
    <template #icon>
      <v-icon name="fa-heart" />
    </template>
    <template #heading>Support me!</template>
    
    Rate my work and
    <a href="https://buymeacoffee.com/lucmsilva" target="_blank" rel="noopener">
      <v-icon name="si-buymeacoffee" /> Buy Me a Coffee
    </a>
    !
  </HomeItem>
</template>

<style>
a {
  display: inline-block;
  margin-top: -3px;
}
</style>
