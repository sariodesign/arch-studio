// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],
  modules: [
    '@formkit/nuxt',
    'nuxt3-leaflet'
  ]
})
