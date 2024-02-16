# Nuxt 3 with UI5 Web Components

- [Nuxt](https://nuxt.com)
- [UI5 Web Components](https://sap.github.io/ui5-webcomponents/)

## Problem

On generating a static SPA, a lot of unneccessary chunks get loaded into each HTML file.

1. Install dependencies
2. Run `npm run generate`
3. Look at any `.html` file in the `dist` folder

```html
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="modulepreload" as="script" crossorigin href="/_nuxt/entry.zb6SGyru.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/SAP-icons.Dwu9dWpk.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/SAP-icons.CpYjjxFv.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/ar.BimD34qr.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/ar_EG.BimD34qr.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/ar_SA.Ct_UrH9d.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/bg.um9Ug5iO.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/ca.Dw2JUual.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/cs.Cayx8hzq.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/da.DTpHCBFv.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/de.Ckw1fi62.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/de_AT.BCtjmtIY.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/de_CH.ffHg75xL.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/el.BNpttV-4.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/el_CY.Cmpyp2zq.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en.D1NwOxM3.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en_AU.Cbc46rTS.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en_GB.Bu1yvnL9.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en_HK.C7mzizTl.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en_IE.BIrUDBXI.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en_IN.WcuuBgb0.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en_NZ.DhXT_Qhk.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en_PG.DjSn8gnQ.js">
      <link rel="prefetch" as="script" crossorigin href="/_nuxt/en_SG.DUPVU1qC.js">
      ...
```

Observations:

If you comment out `import "@ui5/webcomponents-fiori/dist/Assets.js";` in `app.vue` the chunks are gone, but theming does not work anymore. 

The documentation [Using Additional Assets (UI5 Web Components)](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-getting-started-using-assets--docs) states:

> Additional assets are .json files with the respective data. When you import the dist/Assets.js file of a given package, assets are only registered, but not yet fetched. When they are needed, they are loaded on the fly with dymamic imports, and then used.

This does work only in dev mode.