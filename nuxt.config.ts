// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Brew Beer',
      meta: [
        {name: 'description', content: 'Everything about brewed beer'}
      ]
    }
  }
})
