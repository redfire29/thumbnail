// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    baseURL: '/thumbnail/',
    buildAssetsDir: 'nuxt',
  },
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    injectPosition: 'last',
    viewer: false,
  },
})
