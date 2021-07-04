export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Personal Blog',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~/assets/styles/main.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/components.js',
        '@/plugins/date-filter'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules

    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        baseUrl: process.env.BASE_URL || 'https://blogsite-a2897-default-rtdb.asia-southeast1.firebasedatabase.app',
        credentials: false
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },
    loading: {
        color: 'green',
        height: '5px',
        failedcolor: 'red',
        duration: 5000
    },
    env: {
        baseUrl: process.env.BASE_URL || 'https://blogsite-a2897-default-rtdb.asia-southeast1.firebasedatabase.app',
        webAPIKey: 'AIzaSyByFkZCRJpUQTR-ku78dsVCwZoi0JYxTtU'
    },
    transition: {
        name: 'fade',

    },
    serverMiddleware: [

    ]


}
