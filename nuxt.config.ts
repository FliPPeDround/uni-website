export default defineNuxtConfig({
  extends: ['shadcn-docs-nuxt'],
  modules: [
    'motion-v/nuxt',
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  compatibilityDate: '2024-07-06',
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  i18n: {
    defaultLocale: 'zh',
    locales: [
      {
        code: 'zh',
        name: '简体中文',
        language: 'zh-CN',
      },
    ],
  },
})
