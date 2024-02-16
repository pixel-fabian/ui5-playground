// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  vite: {
    vue: {
      template: {
        compilerOptions: {
          // treat all tags with a ui5- as custom elements
          isCustomElement: (tag) => tag.includes("ui5-"),
        },
      },
    },
  },
});
