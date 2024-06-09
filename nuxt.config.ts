// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@vuepic/vue-datepicker/dist/main.css'
  ],
  modules: ["@nuxt/ui"]
})