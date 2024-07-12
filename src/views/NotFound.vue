<template>
  <p>404 Not Found</p>
  <p class="desc">{{ $t('404-not-found-desc') }}</p>

  <RouterLink to="/">
    <button>
      {{ $t('go-to-home') }}
    </button>
  </RouterLink>
</template>

<style scoped>
.desc {
  font-size: small;
}
</style>
