export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "health-med",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],
  scripts: [
    {
      src: '/js/scripts.js',
    },

    // {
    //   src: 'https://code.iconify.design/2/2.2.1/iconify.min.js',
    // },
    {
      src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
      integrity:
        'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
      crossorigin: 'anonymous',
    },
  ],

  pageTransition: 'slide-bottom',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-select.js',
    '~/plugins/prime-vue.js',
    // { src: '~/plugins/v-calendar.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    'primevue/nuxt',
    "bootstrap-vue/nuxt",

  ],
  primevue: {
    theme: 'saga-blue',
    ripple: true,
    components: ['Button', 'Menu', 'TabView', 'TabPanel'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    babel: {
      compact: true,
    },
    transpile: /primevue*/,

  },
};
