const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:'warning'
})


const path = require('path')
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
        path.resolve(__dirname, "./src/theme/style.less"),
      ],
    },
  },
};


module.exports = {
  devServer: {
    host: '0.0.0.0', // 默认是localhost
    port: 8080, // 前端项目编译后使用的端口号，跟webpack配置的port同理
    proxy: {
      '/api': {
        target: "http://10.136.154.33:8000",   // 实际跨域请求的API地址
        secure: false,   // https请求则使用true
        changeOrigin: true,  // 跨域
        // 请求地址重写  http://front-end/api/login ⇒ http://api-url/login
        pathRewrite: {
          '^/api': '/api',
        }
      }
    }
  }
}