<script setup lang="ts">
import HomeItem from '../components/HomeItem.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="notfound">
    <HomeItem>
      <template #icon>
        <v-icon name="fa-sad-cry" />
      </template>
      <template #heading>
        <div>
          {{ t('404-not-found') }}
        </div>
      </template>
      
      {{ t('404-not-found-desc') }}
      <br>
      <RouterLink to="/">{{ t('go-to-home') }}</RouterLink>
    </HomeItem>
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