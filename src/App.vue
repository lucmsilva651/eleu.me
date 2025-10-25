<script setup>
import Home from './pages/Home.vue';
import Experience from './pages/Experience.vue';
import Social from './pages/Social.vue';
import Projects from './pages/Projects.vue';
import Donate from './pages/Donate.vue';
const year = new Date().getFullYear();
</script>

<template>
  <header>
    <a href="/" class="logo">lucmsilva</a>
    <ul class="right-side">
      <li><a href="/#home">Home</a></li>
      <li><a href="https://blog.lucmsilva.com">Blog</a></li>
      <li><a href="/#experience">Experience</a></li>
      <li><a href="/#social">Social</a></li>
      <li><a href="/#projects">Projects</a></li>
      <li><a href="/#donate">Donate</a></li>
    </ul>
    <ul class="right-side-mobile">
      <li><a href="/#home">Home</a></li>
      <li><a href="https://blog.lucmsilva.com">Blog</a></li>
      <li><a href="/#donate">Donate</a></li>
    </ul>
  </header>
  <Home />
  <Experience />
  <Social />
  <Projects />
  <Donate />
  <footer>
    <p>&copy; {{ year }} <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener noreferrer">Lucas Gabriel (lucmsilva)</a>.</p>
    <p>Website developed with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJS</a> and <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite.</a></p>
    <p>Icons by <a href="https://www.fontawesome.com" target="_blank" rel="noopener noreferrer">FontAwesome</a> and <a href="http://simpleicons.org" target="_blank" rel="noopener noreferrer">Simple Icons</a> via <a href="https://oh-vue-icons.js.org/" target="_blank" rel="noopener noreferrer">Oh, Vue Icons!</a>.</p>
  </footer>
</template>

<style>
header {
  border-bottom: solid 1px #1d1d25;
  justify-content: space-between;
  background-color: #24242e;
  align-items: center;
  padding: 10px 60px;
  display: flex;
}

header img {
  width: 24px;
  height: 24px;
}

header .logo {
  font-weight: bold;
  font-size: 24px;
}

header ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

.logo {
  transition: font-weight 0.2s ease;
}

.logo:hover {
  font-weight: 800;
}

header .right-side li {
  transition: font-size 0.2s ease, font-weight 0.5s ease;
}

header .right-side li:hover {
  font-size: 1.05rem;
  font-weight: 600;
}

header .right-side-mobile {
  display: none;
}

footer {
  line-height: 1.6;
  border-top: solid 1px #1d1d25;
  background-color: #24242e;
  text-align: center;
  padding: 15px 60px;
}
</style>