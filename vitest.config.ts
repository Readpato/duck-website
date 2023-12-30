import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    dir: 'test',
    environment: 'happy-dom',
    include: ['*.test.ts'],
  },

})
