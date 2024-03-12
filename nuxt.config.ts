// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "nuxt-shiki"],
  telemetry: false,
  shiki: {
    defaultTheme: "catppuccin-macchiato"
  },
  colorMode: {
    preference: 'dark'
  }
})
