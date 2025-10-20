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
</template>

<style scoped>
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

header .right-side-mobile {
  display: none;
}
</style>