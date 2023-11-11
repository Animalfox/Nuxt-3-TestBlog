// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
  routeRules : {
    '/_nuxt/**': { headers: { 'access-control-allow-methods': 'GET' } },
    '/api/v1/**': { cors: true},
  },
  devtools: { enabled: true },
  ssr: false,
  modules: ["@pinia/nuxt", [
    "@nuxtjs/google-fonts",
    {
      families: {
        Montserrat: [400, 800],
      },
      download: true,
    },
  ], "@nuxt/image", 'nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  components: {
    global: true,
    dirs: ['~/components']
  }
});