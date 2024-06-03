<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const languages = ['en', 'pt'];
const currentLanguageIndex = ref(0);

const changeLanguage = () => {
  currentLanguageIndex.value = (currentLanguageIndex.value + 1) % languages.length;
  locale.value = languages[currentLanguageIndex.value];
};
</script>

<template>
  <header>
    <img alt="GitHub Profile Picture" class="logo" src="https://avatars.githubusercontent.com/u/90426410" width="125"
      height="125" />

    <div class="wrapper">
      <HelloWorld />

      <nav>
        <RouterLink to="/">{{ t('home') }}</RouterLink>
        <RouterLink to="/about">{{ t('about') }}</RouterLink>
        <a href="https://github.com/lucmsilva651/eleu.me" target="_blank" rel="noopener">
          <v-icon name="fa-github" /> GitHub
        </a>
        <a @click="changeLanguage()">{{ t('change-language') }}</a>
      </nav>

      <div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
