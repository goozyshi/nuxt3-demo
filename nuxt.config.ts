// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    baseURL: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/nuxt3-demo/' : '/',
    head: {
      title: 'Nuxt3-Demo',
      meta: [
        {
          name: 'description', content: 'this is a nux3 demo'
        }
      ],
      link: [
        {
          rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/ant-design-icons/dist/anticons.min.css'
        }
      ]
    }
  }
})
