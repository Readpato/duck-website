import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    dir: 'test',
    environment: 'happy-dom',
    include: ['*.test.ts'],
  },

})
