require('dotenv').config();
const { API_URL, API_URL_BROWSER } = process.env;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // mode: 'spa',
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  watchers: {
    webpack: {
      poll: true,
    },
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/dotenv'],

  env: {
    API_URL,
    API_URL_BROWSER,
  },

  proxy: {
    '/api': process.env.API_URL,
  },

  axios: {
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_URL_BROWSER,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
