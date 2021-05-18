export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "homeApp",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Koki Osumiのページ" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "~/favicon.ico" }],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bubbly-bg@1.0.0/dist/bubbly-bg.js",
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets({ isServer }, [preset, options]) {
        options.loose = true;
      }
    }
  },

  router: {
    // base: "/homeApp/"
  },

  generate: {
    routes: [
      "apps/show/1",
      "apps/show/2",
      "apps/show/3",
      "apps/show/4",
      "apps/show/5",
      "apps/show/6",
      "apps/show/7",
      "apps/show/8",
      "apps/show/9",
      "apps/show/10",
    ] //Compromise Can't use [for, while...]
  }
};
