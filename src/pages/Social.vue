<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section id="social" class="window">
    <div class="title-bar">
      <div class="title-bar-text">Social media</div>
    </div>
    <div class="window-body has-space">
      <p>
        These are some links that you can use to contact me
        <i>(or to just take a look)</i>
      </p>
      <ul class="icon-grid">
        <li>
          <a href="https://github.com/lucmsilva651">
            <Icon icon="fa6-brands:github" height="52" />
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/lucmsilva">
            <Icon icon="fa-brands:gitlab" height="52" />
            <p>GitLab</p>
          </a>
        </li>
        <li>
          <a href="https://t.me/LucasAndroid">
            <Icon icon="fa6-brands:telegram" height="52" />
            <p>Telegram</p>
          </a>
        </li>
        <li>
          <a href="https://last.fm/user/lucmsilva">
            <Icon icon="fa6-brands:lastfm-square" height="52" />
            <p>Last.fm</p>
          </a>
        </li>
        <li>
          <a href="https://youtube.com/c/lucmsilva651">
            <Icon icon="fa6-brands:youtube" height="52" />
            <p>YouTube</p>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/lucmsilva">
            <Icon icon="fa6-brands:linkedin" height="52" />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="https://reddit.com/u/lucmsilva">
            <Icon icon="fa6-brands:reddit" height="52" />
            <p>Reddit</p>
          </a>
        </li>
        <li>
          <a href="https://x.com/lucmsilvagg">
            <Icon icon="fa6-brands:twitter" height="52" />
            <p>Twitter / X</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
#social {
  max-width: 320px;
}
#social .window-body {
  padding: 20px 30px;
  gap: 30px;
}
</style>