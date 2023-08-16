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
      title: 'Duck nuxt starter',
      link: [{ rel: 'icon', type: 'image/jpeg', href: '~public/favicon.ico' }],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  devtools: {
    enabled: true,
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-vitest',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: sassAdditionalData() },
      },
    },
  },
})
