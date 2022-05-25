export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'commerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css' , name:"viewport", content:"width=device-width"},
      
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js ",
        integrity:"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" ,
        crossorigin:"anonymous",
        type: "text/javascript"
      },
      
     
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  
    // {
    //   src: "./plugins/vue-sweet-alert.js",
    //   ssr: false
    // },
    // { src: '~/plugins/paypal.js', ssr: false }
    
    // { src: "~/plugins/paypal.client.js" }
    { src: '~/plugins/paypal.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt'
  ],
  axios: {
    // proxy: true
    baseURL: "https://direshop777.herokuapp.com/",
    // baseURL:"http://localhost:8000/api",
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    //   'Access-Control-Allow-Credentials': 'true'
    // }
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'token'
        },
        user: {
          property: '',
          autoFetch: true,
          global: true,
        },
        
        endpoints: {
          login: { url: '/accounts/login/', method: 'post', propertyName:"token"  },
          logout: { url: '/accounts/logout/', method: 'post' },
          user: { url: '/accounts/user/', method: 'get'  },
        },
        
        
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: [
    //   'vue-paypal-checkout'
    // ],
    vendor: ["vue-paypal-checkout"],
    extend(config, {}) {
      config.node = {
          fs: 'empty'
      }
  }
  }
}
