<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import { RouterView, RouterLink } from 'vue-router'

const { locale } = useI18n();
const currentLang = ref(locale.value);

watch(currentLang, (newLang) => {
  locale.value = newLang;
});

watch(locale, (newLocale) => {
  currentLang.value = newLocale;
});
</script>

<template>
  <div class="main_block">
    <RouterLink to="/">
      <img src="https://avatars.githubusercontent.com/u/90426410" class="logo" alt="GitHub Photo" />
    </RouterLink>

    <h1 class="welcome">{{ $t('welcome') }}</h1>

    <div class="wrapper">
      <div class="link_row">
        <RouterLink to="/">{{ $t('home') }}</RouterLink>
        <RouterLink to="/about">{{ $t('about') }}</RouterLink>
        <a href="https://avatars.githubusercontent.com/u/90426410">GitHub</a>
      </div>

      <select name="lang" v-model="currentLang">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="pt">Português</option>
      </select>
    </div>
    
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.link_row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 0.5em 1em;
  font-weight: 500;
}

.link_row a {
  color: white;
}

.logo {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 10em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 50%;
}
</style>