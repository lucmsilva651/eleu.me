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

    I am a 14 y.o. Brazilian guy who lives searching for new things to explore and new ways to make things simply work. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>What I do?</template>

    I make websites, shell scripts, digital art and some other things.
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
      <CommunityIcon />
    </template>
    <template #heading>Social media</template>

    <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-github" /> /lucmsilva651
    </a>

    <a href="https://youtube.com/lucmsilva651" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-youtube" /> /lucmsilva651
    </a>

    <a href="https://facebook.com/lucmsilva" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-facebook" /> /lucmsilva
    </a>

    <a href="https://tiktok.com/@lucmsilva" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-tiktok" /> /lucmsilva
    </a>

    <a href="https://instagram.com/lucasgabm95" target="_blank" rel="noopener">
      <font-awesome-icon icon="fa-brands fa-instagram" /> /lucasgabm95
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support me</template>

    Support me following my social media and rating my work. I can't accept donations by now. But thanks for the visit.
  </WelcomeItem>
</template>
