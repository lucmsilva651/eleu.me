<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <p>&copy; {{ year }} <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener noreferrer">Lucas Gabriel (lucmsilva)</a>.</p>
    <p>Website developed with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJS</a> and <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite.</a></p>
    <p>Icons by <a href="https://www.fontawesome.com" target="_blank" rel="noopener noreferrer">FontAwesome</a> and <a href="http://simpleicons.org" target="_blank" rel="noopener noreferrer">Simple Icons</a> via <a href="https://oh-vue-icons.js.org/" target="_blank" rel="noopener noreferrer">Oh, Vue Icons!</a>.</p>
  </footer>
</template>

<style scoped>
footer {
  line-height: 1.6;
  border-top: solid 1px #1d1d25;
  background-color: #24242e;
  text-align: center;
  padding: 15px 60px;
}
</style>