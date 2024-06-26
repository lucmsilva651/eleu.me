<script setup lang="ts">
import HomeItem from './HomeItem.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { ref } from 'vue';
import PopupMenu from './DonationPopup.vue';
const isPopupVisible = ref(false);
function showPopup() {
  isPopupVisible.value = true;
}
function hidePopup() {
  isPopupVisible.value = false;
}
</script>

<template>
  <HomeItem>
    <template #icon>
      <v-icon name="ri-book-mark-fill" />
    </template>
    <template #heading>
      <div>
        {{ t('who-am-i') }}
      </div>
    </template>
    {{ t('who-am-i-desc') }}
  </HomeItem>

  <HomeItem>
    <template #icon>
      <v-icon name="fa-cube" />
    </template>
    <template #heading>
      <div>
        {{ t('what-do-i-do') }}
      </div>
    </template>
    {{ t('what-do-i-do-desc') }}
  </HomeItem>

  <HomeItem>
    <template #icon>
      <v-icon name="fa-toolbox" />
    </template>
    <template #heading>
      <div>
        {{ t('what-do-i-know') }}
      </div>
    </template>

    <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
      <v-icon name="fa-vuejs" /> Vue
    </a>

    <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
      <v-icon name="co-html5-shield" /> HTML
    </a>

    <a href="https://www.w3.org/css/" target="_blank" rel="noopener noreferrer">
      <v-icon name="co-css3-shiled" /> CSS
    </a>

    <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
      <v-icon name="si-javascript" /> JavaScript
    </a>

    <a href="http://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
      <v-icon name="co-typescript" /> TypeScript
    </a>

    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
      <v-icon name="la-python" /> Python
    </a>

    <a href="https://wikipedia.org/wiki/Batch_file" target="_blank" rel="noopener noreferrer">
      <v-icon name="hi-solid-terminal" /> Batchfile
    </a>

    <a href="https://wikipedia.org/wiki/Shell_script" target="_blank" rel="noopener noreferrer">
      <v-icon name="hi-solid-terminal" /> Shell
    </a>

    <a href="https://learn.microsoft.com/previous-versions/t0aew7h6(v=vs.85)" target="_blank" rel="noopener noreferrer">
      <v-icon name="ri-file-paper-2-fill" /> VBScript
    </a>

    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
      <v-icon name="fa-node" /> Node.js
    </a>

    <a href="https://www.mediawiki.org/wiki/MediaWiki" target="_blank" rel="noopener noreferrer">
      <v-icon name="bi-flower1" /> MediaWiki
    </a>

    <a href="https://en.wikipedia.org/wiki/Assembly_language" target="_blank" rel="noopener noreferrer">
      <v-icon name="si-assemblyscript" /> Assembly (x86)
    </a>

    <a href="https://gamemaker.io/" target="_blank" rel="noopener noreferrer">
      <v-icon name="vi-file-type-light-gamemaker2" /> GameMaker
    </a>

    <a href="http://microsoft.com/microsoft-365/excel" target="_blank" rel="noopener noreferrer">
      <v-icon name="ri-file-excel-2-fill" /> Excel
    </a>

    <a href="https://blogger.com" target="_blank" rel="noopener noreferrer">
      <v-icon name="fa-blogger" /> Blogger
    </a>

    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
      <v-icon name="si-git" /> Git
    </a>

    <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
      <v-icon name="ri-npmjs-fill" /> npm
    </a>
  </HomeItem>

  <HomeItem>
    <template #icon>
      <v-icon name="ri-message-fill" />
    </template>
    <template #heading>
      <div>
        {{ t('my-social-media') }}
      </div>
    </template>

    <a href="https://github.com/lucmsilva651/" target="_blank" rel="noopener noreferrer">
      <v-icon name="fa-github" /> GitHub
    </a>

    <a href="https://youtube.com/lucmsilva651/" target="_blank" rel="noopener noreferrer">
      <v-icon name="si-youtube" /> YouTube
    </a>

    <a href="https://last.fm/user/lucmsilva" target="_blank" rel="noopener noreferrer">
      <v-icon name="fa-lastfm-square" /> Last.fm
    </a>

    <a href="https://steamcommunity.com/id/lucmsilva/" target="_blank" rel="noopener noreferrer">
      <v-icon name="fa-steam-square" /> Steam
    </a>

    <a href="https://lucmsilva.itch.io/" target="_blank" rel="noopener noreferrer">
      <v-icon name="fa-itch-io" /> Itch.io
    </a>

    <a href="https://tiktok.com/@lucmsilva/" target="_blank" rel="noopener noreferrer">
      <v-icon name="co-tiktok" /> TikTok
    </a>

    <a href="https://twitter.com/lucmsilvagg/" target="_blank" rel="noopener noreferrer">
      <v-icon name="co-twitter" /> Twitter
    </a>

    <a href="https://facebook.com/lucmsilva/" target="_blank" rel="noopener noreferrer">
      <v-icon name="co-facebook" /> Facebook
    </a>

    <a href="https://instagram.com/lucasgabm95/" target="_blank" rel="noopener noreferrer">
      <v-icon name="co-instagram" /> Instagram
    </a>
  </HomeItem>

  <HomeItem>
    <template #icon>
      <v-icon name="fa-heart" />
    </template>
    <template #heading>
      <div>
        {{ t('support-me') }}
      </div>
    </template>

    {{ t('support-me-desc') }}
    <a href="https://buymeacoffee.com/lucmsilva" target="_blank" rel="noopener noreferrer">
      <v-icon name="si-buymeacoffee" /> Buy Me a Coffee
    </a>
    .
    <div @click="hidePopup">
      <a style="cursor: pointer; user-select: none;" @click.stop="showPopup">{{ t('pix') }}</a>
      <PopupMenu :visible="isPopupVisible" @close="hidePopup" />
    </div>
  </HomeItem>
</template>

<style>
a {
  display: inline-block;
  margin-top: -3px;
}
</style>
