// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Patrick Raedler',
      link: [{ rel: 'icon', type: 'image/jpeg', href: '~public/favicon.ico' }],
    },
  },
  css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    config: {
      darkMode: 'class',
    },
  },
  colorMode: {
    classSuffix: '',
  },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  compatibilityDate: '2024-11-17',
})
