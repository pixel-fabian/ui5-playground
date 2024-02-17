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
  // Disable prefetch for dynamic imports, because too many UI5 Web Components Assets would be added
  // https://github.com/nuxt/nuxt/issues/18376#issuecomment-1431318970
  hooks: {
    "build:manifest": (manifest) => {
      for (const key in manifest) {
        // or other logic
        manifest[key].dynamicImports = [];
      }
    },
  },
});
