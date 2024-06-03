<script setup lang="ts">
import HomeItem from '../components/HomeItem.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="about">
    <HomeItem>
      <template #icon>
        <v-icon name="fa-smile" />
      </template>
      <template #heading>
        <div>
          {{ t('about2') }}
        </div>
      </template>

      {{ t('made-with') }}
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <br>
      {{ t('hosted-on') }}
      <a href="https://www.vercel.com/" target="_blank" rel="noopener">Vercel</a>.
      <br>
      {{ t('icons-by') }}
      <a href="https://oh-vue-icons.js.org/" target="_blank" rel="noopener">Oh, Vue Icons!</a>.
      <br>
      {{ t('pfp-credits') }}
      <a href="https://gleicecomms.carrd.co/" target="_blank" rel="noopener">Gleicinha Arts</a>.
      <br>
      {{ t('cloudflare') }}
      <a href="https://www.cloudflare.com" target="_blank" rel="noopener">Cloudflare</a>.
      <br>
      {{ t('freedns-domain') }}
      <a href="https://freedns.afraid.org" target="_blank" rel="noopener">FreeDNS</a>.
      <br>
      {{ t('fonts-by') }}
      <a href="https://fonts.google.com" target="_blank" rel="noopener">Google Fonts</a>.
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
