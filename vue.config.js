module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  // 关闭 ESLint 检查
  lintOnSave: false,
  // 配置代理
  devServer: {
    // proxy: 'http://localhost:5000'
    
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/atguigu': ''
        },
        ws: true,
        changeOrigin: true
      },
      '/xqiche': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/xqiche': ''
        },
        ws: true,
        changeOrigin: true
      }
    }
  }
}

