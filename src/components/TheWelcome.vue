<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Who I am?</template>

    I am a 14 y.o. Brazilian guy who lives searching for new things to explore and
    new ways to make things simply work. I make websites, shell scripts, and
    some other things.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>My projects</template>

    I will leave all of my projects in my GitHub account:
    <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener">
      GitHub/lucmsilva651
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Social media</template>

    <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener">
      GitHub/lucmsilva651
    </a>
    |
    <a href="https://youtube.com/lucmsilva651" target="_blank" rel="noopener">
      YouTube/lucmsilva651
    </a>
    |
    <a href="https://facebook.com/lucmsilva" target="_blank" rel="noopener">
      Facebook/lucmsilva
    </a>
    |
    <a href="https://tiktok.com/@lucmsilva" target="_blank" rel="noopener">
      TikTok/lucmsilva
    </a>
    |
    <a href="https://instagram.com/lucasgabm95" target="_blank" rel="noopener">
      Instagram/lucasgabm95
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
