import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: 'Inter',
            weights: ['400', '500', '600', '700', '800'],
          },
        ],
      },
    }),
    presetUno(),
    presetAttributify(),
  ],
  shortcuts: {
    'rp-container': 'w-full max-w-160 mx-auto px-7 py-10',
    'rp-title': 'mt4 mb6 text-4xl text-white font-extrabold',
  },
})
