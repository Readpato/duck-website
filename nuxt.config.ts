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
  shadcn: {
    prefix: 'SC',
    componentDir: './components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/content',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: sassAdditionalData() },
      },
    },
  },
})
