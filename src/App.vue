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
        <RouterLink to="/">
          <button>
            {{ $t('home') }}
          </button>
        </RouterLink>

        <a href="https://bio.eleu.me" target="_blank" rel="noopener noreferrer">
          <button>
            {{ $t('about') }}
          </button>
        </a>

        <a href="https://github.com/lucmsilva651/eleu.me/tree/new-vue" target="_blank" rel="noopener noreferrer">
          <button>
            <v-icon name="ri-github-line" scale="0.8" />
            GitHub
          </button>
        </a>
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

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 0 20px 0;
}

.link_row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  padding: 0 5px 0 0;
}

button, option, select {
  color: #fff;
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