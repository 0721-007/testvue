import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/solar-system', name: 'SolarSystem', component: () => import('../views/SolarSystem.vue') },
  { path: '/planets/mercury', name: 'Mercury', component: () => import('../views/planets/Mercury.vue') },
  { path: '/planets/venus', name: 'Venus', component: () => import('../views/planets/Venus.vue') },
  { path: '/planets/earth', name: 'Earth', component: () => import('../views/planets/Earth.vue') },
  { path: '/planets/mars', name: 'Mars', component: () => import('../views/planets/Mars.vue') },
  { path: '/planets/jupiter', name: 'Jupiter', component: () => import('../views/planets/Jupiter.vue') },
  { path: '/planets/saturn', name: 'Saturn', component: () => import('../views/planets/Saturn.vue') },
  { path: '/planets/uranus', name: 'Uranus', component: () => import('../views/planets/Uranus.vue') },
  { path: '/planets/neptune', name: 'Neptune', component: () => import('../views/planets/Neptune.vue') },
  { path: '/sun', name: 'Sun', component: () => import('../views/Sun.vue') },
  { path: '/moon', name: 'Moon', component: () => import('../views/Moon.vue') },
  { path: '/stars', name: 'Stars', component: () => import('../views/Stars.vue') },
  { path: '/galaxies', name: 'Galaxies', component: () => import('../views/Galaxies.vue') },
  { path: '/black-holes', name: 'BlackHoles', component: () => import('../views/BlackHoles.vue') },
  { path: '/nebulae', name: 'Nebulae', component: () => import('../views/Nebulae.vue') },
  { path: '/asteroids', name: 'Asteroids', component: () => import('../views/Asteroids.vue') },
  { path: '/comets', name: 'Comets', component: () => import('../views/Comets.vue') },
  { path: '/space-exploration', name: 'SpaceExploration', component: () => import('../views/SpaceExploration.vue') },
  { path: '/astronauts', name: 'Astronauts', component: () => import('../views/Astronauts.vue') },
  { path: '/space-stations', name: 'SpaceStations', component: () => import('../views/SpaceStations.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
