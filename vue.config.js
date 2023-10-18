module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
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
};
