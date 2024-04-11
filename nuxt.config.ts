import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],

  experimental: {
    typedPages: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  devtools: { enabled: true },
});
