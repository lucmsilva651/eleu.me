<script setup>
import Home from './pages/Home.vue';
import Experience from './pages/Experience.vue';
import Social from './pages/Social.vue';
import Projects from './pages/Projects.vue';
import Donate from './pages/Donate.vue';
import Things from './pages/Things.vue';
import Gists from './pages/Gists.vue';
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
  <Gists />
  <Things />
  <Donate />
  <footer>
    <p>&copy; {{ year }} <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener noreferrer">Lucas Gabriel (lucmsilva)</a>.</p>
    <p>Website developed with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a> and <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite.</a></p>
    <p>Icons by multiple sources. Via <a href="https://iconify.design/" target="_blank" rel="noopener noreferrer">Iconify</a>.</p>
  </footer>
</template>

<style>
header {
  border-bottom: solid 1px var(--color-border-soft);
  justify-content: space-between;
  background-color: var(--color-bg-surface);
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
  border-top: solid 1px var(--color-border-soft);
  background-color: var(--color-bg-surface);
  text-align: center;
  padding: 15px 60px;
}
</style>
