import fs from 'fs';
import path from 'path';
import posts from './content/posts';

const generate = {
  routes: posts.map(p => `experiment/${p}`),
};

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/webgl-journey/',
  },
} : {};

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || 'Webgl Journey',
    title: 'Webgl Journey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Nuxt.js server config
  */
  server: {
    host: '0.0.0.0', // default: localhost
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'certificates/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'certificates/server.crt')),
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content'),
        options: {
          vue: {
            root: 'dynamicMarkdown',
          },
        },
      });
      config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        enforce: 'post',
        use: {
          loader: 'ify-loader',
        },
      });
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'raw-loader',
        },
      });
    },
  },
  generate,
  ...routerBase,
}
