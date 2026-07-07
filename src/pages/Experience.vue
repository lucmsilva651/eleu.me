<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section id="experience" class="window">
    <div class="title-bar">
      <div class="title-bar-text">My experience</div>
    </div>
    <div class="window-body has-space">
      <p>
        I'm a self-taught developer, and I started learning programming in 2022.
        I have experience with:
      </p>
      <ul class="icon-grid">
        <li>
          <a href="https://www.microsoft.com/windows/">
            <Icon icon="fa7-brands:windows" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.kernel.org/">
            <Icon icon="fa7-brands:linux" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.apple.com/macos/">
            <Icon icon="fa7-brands:apple" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.android.com/">
            <Icon icon="fa7-brands:android" height="52" />
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/">
            <Icon icon="fa7-brands:vuejs" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/html/">
            <Icon icon="fa7-brands:html5" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/Style/CSS/Overview.html">
            <Icon icon="fa7-brands:css3" height="52" />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/docs/Web/JavaScript">
            <Icon icon="fa7-brands:js" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.electronjs.org/">
            <Icon icon="mdi:electron-framework" height="52" />
          </a>
        </li>
        <li>
          <a href="https://tauri.app/">
            <Icon icon="simple-icons:tauri" height="52" />
          </a>
        </li>
        <li>
          <a href="https://git-scm.com">
            <Icon icon="fa7-brands:git-alt" height="52" />
          </a>
        </li>
        <li>
          <a href="https://github.com">
            <Icon icon="fa7-brands:github" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.java.com/">
            <Icon icon="fa7-brands:java" height="52" />
          </a>
        </li>
        <li>
          <a href="https://wikipedia.org/wiki/Shell_script">
            <Icon icon="mdi:dollar" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.arduino.cc/">
            <Icon icon="simple-icons:arduino" height="52" />
          </a>
        </li>
        <li>
          <a href="https://isocpp.org/">
            <Icon icon="mdi:language-cpp" height="52" />
          </a>
        </li>
        <li>
          <a href="https://www.python.org/">
            <Icon icon="fa7-brands:python" height="52" />
          </a>
        </li>
        <li>
          <a href="https://nodejs.org/">
            <Icon icon="fa7-brands:node" height="52" />
          </a>
        </li>
        <li>
          <a href="https://bun.sh/">
            <Icon icon="simple-icons:bun" height="52" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
#experience {
  max-width: 400px;
}

#experience .window-body {
  padding: 20px 30px;
  gap: 30px;
}
</style>
