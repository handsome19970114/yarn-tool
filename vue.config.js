module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  devServer: {
    host: 'localhost',
    port: 8102,
    open: true,
    hot: true,

    proxy: {
      '^/safety': {
        target: 'https://caps.runde.pro/api/index.php',
        pathRewrite: {
          '^/safety': '',
        },
        ws: false,
        changeOrigin: true,
      },

      '^/chp': {
        target: 'https://api.shadiao.pro/',
        // pathRewrite: {
        //   '^/chp': '',
        // },
        ws: false,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    module: {
      rules: [
        {
          test: /\.xlsx$/,
          use: 'file-loader',
          exclude: /node_modules/,
        },
      ],
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '工具集成';
      return args;
    });
  },
};
