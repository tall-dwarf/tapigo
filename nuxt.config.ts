// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },
})
