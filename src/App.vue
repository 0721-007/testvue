<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)

const menuItems = [
  { path: '/', name: '首页', icon: '🏠' },
  { path: '/solar-system', name: '太阳系', icon: '☀️' },
  { path: '/sun', name: '太阳', icon: '🌞' },
  { path: '/planets/mercury', name: '水星', icon: '☿️' },
  { path: '/planets/venus', name: '金星', icon: '♀️' },
  { path: '/planets/earth', name: '地球', icon: '🌍' },
  { path: '/planets/mars', name: '火星', icon: '🔴' },
  { path: '/planets/jupiter', name: '木星', icon: '🟠' },
  { path: '/planets/saturn', name: '土星', icon: '🪐' },
  { path: '/planets/uranus', name: '天王星', icon: '🔵' },
  { path: '/planets/neptune', name: '海王星', icon: '💙' },
  { path: '/moon', name: '月球', icon: '🌙' },
  { path: '/stars', name: '恒星', icon: '⭐' },
  { path: '/galaxies', name: '星系', icon: '🌌' },
  { path: '/black-holes', name: '黑洞', icon: '🕳️' },
  { path: '/nebulae', name: '星云', icon: '💫' },
  { path: '/asteroids', name: '小行星', icon: '🪨' },
  { path: '/comets', name: '彗星', icon: '☄️' },
  { path: '/space-exploration', name: '航天探索', icon: '🚀' },
  { path: '/astronauts', name: '宇航员', icon: '👨‍🚀' },
  { path: '/space-stations', name: '空间站', icon: '🛰️' },
]
</script>

<template>
  <div class="app-container">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ open: menuOpen }">
      <div class="sidebar-header">
        <h1>🌌 太空探索</h1>
        <button class="close-btn" @click="menuOpen = false">✕</button>
      </div>
      <nav class="sidebar-nav">
        <RouterLink 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path"
          class="nav-item"
          @click="menuOpen = false"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-text">{{ item.name }}</span>
        </RouterLink>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-wrapper">
      <header class="top-header">
        <button class="menu-btn" @click="menuOpen = !menuOpen">☰</button>
        <h2>太空知识库</h2>
      </header>
      <main class="content">
        <RouterView />
      </main>
    </div>

    <!-- Overlay -->
    <div class="overlay" :class="{ show: menuOpen }" @click="menuOpen = false"></div>
  </div>
</template>

<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  background: #f8f9fa;
  width: 100%;
}

body {
  font-family: 'Source Sans Pro', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f8f9fa;
  min-height: 100vh;
  color: #1f2937;
  overflow-x: hidden;
  width: 100%;
}

html,
body {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f8f9fa;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 8px;
}

html::-webkit-scrollbar-track,
body::-webkit-scrollbar-track {
  background: #f8f9fa;
}

html::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

html::-webkit-scrollbar-thumb:hover,
body::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.app-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.sidebar {
  width: 260px;
  background: #13294B;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.sidebar.open {
  transform: translateX(0);
}

@media (min-width: 1024px) {
  .app-container {
    display: block;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transform: none;
    transition: none;
    height: 100vh;
  }
  .menu-btn {
    display: none !important;
  }
  .app-container .main-wrapper {
    margin-left: 260px;
    width: calc(100% - 260px);
    max-width: calc(100% - 260px);
  }
  .overlay {
    display: none !important;
  }
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0D1F3C;
}

.sidebar-header h1 {
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
}

@media (max-width: 1023px) {
  .close-btn {
    display: block;
  }
}

.sidebar-nav {
  padding: 15px 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  font-size: 0.95rem;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-left-color: #FF5F05;
}

.nav-item.router-link-active {
  background: rgba(255, 95, 5, 0.2);
  color: #ffffff;
  border-left-color: #FF5F05;
}

.nav-icon {
  font-size: 1.1rem;
  margin-right: 12px;
  width: 24px;
  text-align: center;
}

.nav-text {
  font-size: 0.9rem;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  width: 100%;
  min-width: 0;
  overflow-x: hidden;
}

.top-header {
  background: #ffffff;
  padding: 15px 25px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 15px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.menu-btn {
  background: #13294B;
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.menu-btn:hover {
  background: #1a3a6e;
}

.top-header h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #13294B;
}

.content {
  flex: 1;
  padding: 30px 0 30px 30px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.overlay.show {
  opacity: 1;
  visibility: visible;
}
</style>
