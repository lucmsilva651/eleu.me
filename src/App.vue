<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Experience from "./pages/Experience.vue";
import Social from "./pages/Social.vue";
import Donate from "./pages/Donate.vue";
const year = new Date().getFullYear();

const desktopRef = ref(null);
let currentZ = 10;

const route = useRoute();
const router = useRouter();

const spawnPoints = {
  home: { x: 20, y: 20 },
  experience: { x: 530, y: 36 },
  social: { x: 940, y: 50 },
  donate: { x: 90, y: 290 },
};

const windows = reactive([
  { id: "home", component: Home, x: spawnPoints.home.x, y: spawnPoints.home.y, z: 12 },
  {
    id: "experience",
    component: Experience,
    x: spawnPoints.experience.x,
    y: spawnPoints.experience.y,
    z: 11,
  },
  {
    id: "social",
    component: Social,
    x: spawnPoints.social.x,
    y: spawnPoints.social.y,
    z: 13,
  },
  { id: "donate", component: Donate, x: spawnPoints.donate.x, y: spawnPoints.donate.y, z: 14 },
]);

const sectionIds = windows.map((x) => x.id);
const activeWindowId = ref(null);
const isSingleWindowMode = computed(() => activeWindowId.value !== null);
const visibleWindows = computed(() => {
  if (!activeWindowId.value) return windows;
  return windows.filter((x) => x.id === activeWindowId.value);
});

let dragState = null;

const getSectionFromRoute = () => {
  const hashSection = route.hash.replace(/^#/, "").toLowerCase();
  const pathSection = route.path.replace(/^\//, "").toLowerCase();
  const section = hashSection || pathSection;
  if (!section) return null;
  return sectionIds.includes(section) ? section : null;
};

const resetToSpawnPoints = () => {
  windows.forEach((win) => {
    const spawn = spawnPoints[win.id];
    if (!spawn) return;
    win.x = spawn.x;
    win.y = spawn.y;
  });
};

const syncRouteShape = (section) => {
  if (section) {
    const expectedHash = `#${section}`;
    if (route.path !== "/" || route.hash !== expectedHash) {
      router.replace({ path: "/", hash: expectedHash });
    }
    return;
  }

  if (route.path !== "/" || route.hash) {
    router.replace({ path: "/" });
  }
};

const applySectionFromRoute = () => {
  const section = getSectionFromRoute();
  activeWindowId.value = section;
  if (section) bringToFront(section);
  else resetToSpawnPoints();
  syncRouteShape(section);
};

const bringToFront = (id) => {
  const win = windows.find((x) => x.id === id);
  if (!win) return;
  currentZ += 1;
  win.z = currentZ;
};

const startDrag = (event, id) => {
  if (isSingleWindowMode.value) return;
  bringToFront(id);
  if (window.matchMedia("(max-width: 900px)").matches) return;

  const titleBar = event.target.closest(".title-bar");
  if (!titleBar) return;

  const win = windows.find((x) => x.id === id);
  const desktopEl = desktopRef.value;
  const windowEl = event.currentTarget;
  if (!win || !desktopEl || !windowEl) return;

  const desktopRect = desktopEl.getBoundingClientRect();
  const windowRect = windowEl.getBoundingClientRect();

  dragState = {
    id,
    offsetX: event.clientX - windowRect.left,
    offsetY: event.clientY - windowRect.top,
    maxX: Math.max(0, desktopRect.width - windowRect.width),
    maxY: Math.max(0, desktopRect.height - windowRect.height),
  };

  window.addEventListener("pointermove", onDrag);
  window.addEventListener("pointerup", stopDrag);
};

const onDrag = (event) => {
  if (!dragState || !desktopRef.value) return;

  const desktopRect = desktopRef.value.getBoundingClientRect();
  const win = windows.find((x) => x.id === dragState.id);
  if (!win) return;

  const x = event.clientX - desktopRect.left - dragState.offsetX;
  const y = event.clientY - desktopRect.top - dragState.offsetY;

  win.x = Math.min(Math.max(0, x), dragState.maxX);
  win.y = Math.min(Math.max(0, y), dragState.maxY);
};

const stopDrag = () => {
  dragState = null;
  window.removeEventListener("pointermove", onDrag);
  window.removeEventListener("pointerup", stopDrag);
};

watch(() => route.fullPath, applySectionFromRoute, { immediate: true });

onBeforeUnmount(() => {
  stopDrag();
});

const k = () =>
  (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
</script>

<template>
  <div class="window active glass">
    <div class="title-bar">
      <div class="title-bar-text">lucmsilva's Website</div>
      <div class="title-bar-controls">
        <button aria-label="Help"></button>
        <button aria-label="Close" @click="k"></button>
      </div>
    </div>
    <div class="window-body">
      <div class="main-window">
        <header>
          <RouterLink to="/" class="logo">lucmsilva</RouterLink>
          <ul class="right-side">
            <li>
              <RouterLink :to="{ path: '/', hash: '#home' }">Home</RouterLink>
            </li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://blog.lucmsilva.com">Blog</a></li>
            <li>
              <RouterLink :to="{ path: '/', hash: '#experience' }"
                >Experience</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ path: '/', hash: '#social' }">Social</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ path: '/', hash: '#donate' }">Donate</RouterLink>
            </li>
          </ul>
          <ul class="right-side-mobile">
            <li>
              <RouterLink :to="{ path: '/', hash: '#home' }">Home</RouterLink>
            </li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://blog.lucmsilva.com">Blog</a></li>
            <li>
              <RouterLink :to="{ path: '/', hash: '#donate' }">Donate</RouterLink>
            </li>
          </ul>
        </header>
        <div
          ref="desktopRef"
          class="desktop-area"
          :class="{ 'single-window-mode': isSingleWindowMode }"
        >
          <div
            v-for="win in visibleWindows"
            :key="win.id"
            class="desktop-window"
            :style="{ left: `${win.x}px`, top: `${win.y}px`, zIndex: win.z }"
            @pointerdown="startDrag($event, win.id)"
          >
            <component :is="win.component" />
          </div>
        </div>
        <div class="footer">
          <p>
            &copy; {{ year }}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/lucmsilva651">Lucas Gabriel (lucmsilva)</a>.
            Website developed with
            <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue</a>
            and
            <a target="_blank" rel="noopener noreferrer" href="https://vite.dev/">Vite.</a> 
            Icons by multiple sources via
            <a target="_blank" rel="noopener noreferrer" href="https://iconify.design/">Iconify</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

div.window {
  margin: 10px;
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.main-window {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-section-even);
}

.window-body {
  padding: 0;
  height: 100%;
}

.desktop-area {
  flex: 1;
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.desktop-area.single-window-mode {
  display: flex;
  align-items: center;
  justify-content: center;
}

.desktop-window {
  position: absolute;
  user-select: none;
}

.desktop-area.single-window-mode .desktop-window {
  position: static;
}

.desktop-window :is(.title-bar, .title-bar-text) {
  cursor: move;
}

.desktop-window .window {
  margin: 0;
}

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
  transition:
    font-size 0.2s ease,
    font-weight 0.5s ease;
}

header .right-side li:hover {
  font-size: .8rem;
  font-weight: 600;
}

header .right-side-mobile {
  display: none;
}

.footer {
  color: white;
  line-height: 1.6;
  border-top: solid 1px var(--color-border-soft);
  background-color: var(--color-bg-surface);
  text-align: center;
  padding: 12px 30px;
}

@media (max-width: 900px) {
  .desktop-area {
    overflow-y: auto;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .desktop-window {
    position: static;
  }
  .footer {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 540px) {
  header {
    flex-direction: column;
    gap: 5px;
  }
  header .right-side {
    display: none;
  }
  header .right-side-mobile {
    display: flex;
  }
}
</style>
