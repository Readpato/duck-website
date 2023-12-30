// https://nuxt.com/docs/api/configuration/nuxt-config

const sassAdditionalData = () => {
  let additionalData = '@use "sass:math";'
  additionalData += '@import "@/assets/scss/_utils.scss";'
  additionalData += '@import "@/assets/scss/main.scss";'
  return additionalData
}

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
  css: [
    '@unocss/reset/tailwind.css',
  ],
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxt/test-utils/module', '@nuxt/content'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: sassAdditionalData() },
      },
    },
  },
})
